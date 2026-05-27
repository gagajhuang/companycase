<template>
  <footer>
    <div class="wrap">
      <div class="term">{{ $t('footer.text') }}</div>
      <div class="term">{{ $t('footer.text2') }}</div>
      <div class="shareBox">
        <div class="shareBtn">
          <a href="https://www.youtube.com/user/vivotekweb" target="_blank">
            <img src="@/assets/images/Link1.svg" alt="">
          </a>
        </div>
        <div class="shareBtn">
          <a href="https://www.vivotek.com/zh-Hant" target="_blank">
            <img src="@/assets/images/Link2.svg" alt="">
          </a>
        </div>
        <div class="shareBtn">
          <a href="https://www.linkedin.com/company/vivotekglobal/" target="_blank">
            <img src="@/assets/images/Link3.svg" alt="">
          </a>
        </div>
      </div>
      <div class="copyright">© VIVOTEK Inc. All rights reserved.</div>
    </div>
  </footer>
</template>
<style lang="scss" scoped>
footer {
    position: relative;
    width: 100%;
    background-color: #FFFFFF;
    bottom: 0;
    left: 0;
    .wrap{
      padding: 80px 0;
      @include mobile {
        padding: vw(80) 0;
      }
      .term{
        padding: 0 10px;
        text-align: center;
        font-size: 20px;
        line-height: 30px;
        color: #828282;
        @include mobile {
            padding: 0 vw(40);
            font-size:vw(24);
            line-height: vw(35);
        }
      }
      .shareBox{
        position: relative;
        margin-top: 40px;
        display: flex;
        justify-content: center;
        margin-left: -24px;
        @include mobile {
            margin-top: vw(40);
            margin-left:vw(-24);
        }
        .shareBtn{
            width: 64px;
            margin-left: 24px;
            cursor: pointer;
            transition: all 0.5s;
            @include mobile {
                width: vw(64);
                margin-left:vw(24);
            }
            &:hover{
                transform: translateY(-3px) scale(1.02);
            }
            img{
                width: 100%;
                display: block;
            }
        }
      }
      .copyright{
        margin-top: 40px;
        text-align: center;
        font-size: 16px;
        color: #828282;
        @include mobile {
            margin-top: vw(40);
            font-size:vw(24);
        }
      }
    }
}

</style>
<script setup>

const showMenu = ref(false);
const toggleMenu = async (e) => {
  showMenu.value = !showMenu.value;

};

</script>
