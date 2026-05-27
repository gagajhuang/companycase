<template>
  <div id="speed">
    <!-- 動畫最後做 -->
    <div class="kv">
      <div class="visible-desktop">
        <div class="img-kv item-1" data-aos="fade-up" data-aos-duration="1000">
          <img src="@/assets/images/speed/img-kv1.png" alt="" />
        </div>
        <div
          class="img-kv item-2"
          data-aos="fade-up"
          data-aos-delay="500"
          data-aos-duration="1000"
        >
          <img src="@/assets/images/speed/img-kv2.png" alt="" />
        </div>
        <div
          class="img-kv item-3"
          data-aos="fade-up"
          data-aos-delay="1000"
          data-aos-duration="1000"
        >
          <img src="@/assets/images/speed/img-kv3.png" alt="" />
        </div>
        <div
          class="img-kv item-4"
          data-aos="fade-up"
          data-aos-delay="1500"
          data-aos-duration="1000"
        >
          <img src="@/assets/images/speed/img-kv4.png" alt="" />
        </div>
      </div>
      <div class="img-logo">
        <img
          v-if="locale === 'zh'"
          src="@/assets/images/speed/img-kv-logo.png"
          alt=""
        />
        <img v-else src="@/assets/images/speed/img-kv-logo_en.png" alt="" />
      </div>
    </div>

    <!-- 活動說明 -->
    <section id="description">
      <div class="container w-1200">
        <div id="intro">
          <div class="des">
            <h3 data-aos="fade-up">
              <!-- <span class="sub">{{ $t('25th.intro.h3Sub') }}</span> -->
              SPEED
              <span class="style-origin">MAKES TOMORROW EASIER, TODAY!</span>
            </h3>
            <h4>
              {{ $t("speed.intro.h4") }}
              <span class="text-dark-blue">{{
                $t("speed.intro.h4-text")
              }}</span>
            </h4>
            <!-- btn -->
            <!-- <nuxt-link class="link" to="#activity">
              {{ $t("speed.intro.btn") }}
              <fa icon="angles-down" class="icon" />
            </nuxt-link> -->
          </div>
        </div>

        <!-- 獎項 -->
        <div class="awards">
          <h2 data-aos="fade-up">
            {{ $t("speed.awards.h2") }}
            <p class="sub">
              {{ $t("speed.awards.h2Sub") }}
            </p>
          </h2>
          <div class="awards-intro">
            <div class="awards-item">
              <div class="awards-img">
                <img src="@/assets/images/quality/img-award1.svg" alt="" />
              </div>
              <div class="awards-content">
                <p class="awards-title">
                  {{ $t("speed.awards.item1.title") }}
                </p>
                <p class="awards-text">
                  {{ $t("speed.awards.itemDes") }}
                  <span class="text-dark-blue weight-700">US$200</span>
                </p>
              </div>
            </div>
            <div class="awards-item">
              <div class="awards-img">
                <img src="@/assets/images/quality/img-award2.svg" alt="" />
              </div>
              <div class="awards-content">
                <p class="awards-title">
                  {{ $t("speed.awards.item2.title") }}
                </p>
                <p class="awards-text">
                  {{ $t("speed.awards.itemDes") }}
                  <span class="text-dark-blue weight-700">US$150</span>
                </p>
              </div>
            </div>
            <div class="awards-item">
              <div class="awards-img">
                <img src="@/assets/images/quality/img-award3.svg" alt="" />
              </div>
              <div class="awards-content">
                <p class="awards-title">
                  {{ $t("speed.awards.item3.title") }}
                </p>
                <p class="awards-text">
                  {{ $t("speed.awards.itemDes") }}
                  <span class="text-dark-blue weight-700">US$100</span>
                </p>
              </div>
            </div>
          </div>
          <div class="awards-intro awards-others">
            <div class="awards-item">
              <div class="awards-content">
                <p class="awards-title">
                  {{ $t("speed.awards.item4.title") }}
                </p>
                <p class="awards-text">
                  <span>
                    {{ $t("speed.awards.item4.des") }}
                  </span>
                  <span class="text-dark-blue">
                    <b class="weight-700">US$50</b>
                  </span>
                </p>
              </div>
              <div class="awards-content">
                <p class="awards-title">
                  {{ $t("speed.awards.item5.title") }}
                </p>
                <p class="awards-text">
                  {{ $t("speed.awards.item5.des") }}
                  <span class="text-dark-blue weight-700">US$50</span>
                  <!-- <span class="text-s">{{
                    $t("quality.awards.item5.des")
                  }}</span> -->
                </p>
              </div>
            </div>
          </div>
        </div>
        <!-- 公告區 -->
        <div class="announcement">
          <h2 data-aos="fade-up">
            {{ $t("quality.awards.announcement.h2") }}
          </h2>
          <div class="tabs-block">
            <div class="tabs-btn">
              <div
                class="tabs-item"
                :class="{ active: categoryVoteName === '9' }"
                data-item="9"
                @click="tabsChange($event, 'vote')"
              >
                {{ $t("speed.activity.upload.category.item1.title") }}
              </div>
              <div
                class="tabs-item"
                :class="{ active: categoryVoteName === '10' }"
                data-item="10"
                @click="tabsChange($event, 'vote')"
              >
                {{ $t("speed.activity.upload.category.item2.title") }}
              </div>
              <div
                class="tabs-item"
                :class="{ active: categoryVoteName === '11' }"
                data-item="11"
                @click="tabsChange($event, 'vote')"
              >
                {{ $t("speed.activity.upload.category.item3.title1") }}
              </div>
            </div>
            <div class="tabs-category">
              <template v-for="(item, index) in announcementInfo" :key="index">
                <div
                  class="category-style"
                  :class="
                    categoryVoteName === item.category
                      ? ['active', 'show', categoryVoteName]
                      : []
                  "
                >
                  <div class="tabs-content upload-block">
                    <!-- No.1-3 -->
                    <div class="content">
                      <template v-for="(itemR, idx) in item.ranking" :key="idx">
                        <div class="item" v-if="idx < 3">
                          <div class="ranking-style">
                            <img
                              v-if="itemR.id === '1'"
                              src="@/assets/images/quality/icon-crown1.svg"
                              alt=""
                            />
                            <img
                              v-else-if="itemR.id === '2'"
                              src="@/assets/images/quality/icon-crown2.svg"
                              alt=""
                            />
                            <img
                              v-else
                              src="@/assets/images/quality/icon-crown3.svg"
                              alt=""
                            />
                            No. {{ itemR.id }}
                          </div>
                          <div class="employee">
                            <!-- 照片輪播 -->
                            <div class="swiper_block">
                              <ThumbsImageAwardSpeed :voteData="itemR" />
                            </div>
                            <p class="name">
                              {{ itemR.name }} <br />
                              <span class="step"
                                >{{ itemR.step }}
                                {{
                                  $t("speed.activity.announcement.step")
                                }}</span
                              >
                            </p>
                            <p class="text">
                              {{ itemR.text }}
                            </p>
                          </div>
                        </div>
                      </template>
                    </div>

                    <div class="content another">
                      <div class="item">
                        <!-- 4-10 -->
                        <div class="list">
                          <div class="ranking-style">No. 4-10</div>
                          <div class="list-content">
                            <template
                              v-for="(itemR, idx) in item.ranking"
                              :key="idx"
                            >
                              <div class="employee" v-if="idx >= 3 && idx < 10">
                                <p class="name">
                                  <span class="num">{{ itemR.id }}</span>

                                  <span class="step">
                                    <strong>{{ itemR.name }}</strong>
                                    <br />
                                    {{ itemR.step }}
                                    {{ $t("speed.activity.announcement.step") }}
                                  </span>
                                </p>
                                <!-- <img :src="getImagePath2(itemR.img1)" alt="" /> -->
                                <!-- <img
                                  src="@/assets/images/quality/img-vote-people.svg"
                                  alt=""
                                /> -->
                              </div>
                            </template>
                          </div>
                        </div>
                        <!-- 幸運星 -->
                        <div class="list lucky-star">
                          <div class="ranking-style">
                            {{ $t("quality.awards.announcement.lucky") }}
                          </div>
                          <div class="list-content">
                            <template
                              v-for="(itemR, idx) in item.ranking"
                              :key="idx"
                            >
                              <div class="employee" v-if="idx >= 10">
                                <p class="name">
                                  <img
                                    src="@/assets/images/quality/icon-lucky.svg"
                                    alt=""
                                  />
                                  {{ itemR.pd }}<br />
                                  {{ itemR.name }}
                                </p>
                              </div>
                            </template>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </template>
            </div>
          </div>
          <p class="remark">{{ $t("speed.activity.announcement.remark") }}</p>
        </div>
      </div>
    </section>

    <!-- 步驟 -->
    <section id="three-step">
      <div class="container w-1200">
        <!-- Step -->
        <div class="step">
          <h2 data-aos="fade-up">
            {{ $t("speed.step.h2") }}
            <p class="sub">
              {{ $t("speed.step.h2Sub") }}
            </p>
          </h2>
          <div class="step-content">
            <template v-for="(item, index) in stepItem" :key="index">
              <div class="step-item">
                <div class="item-content">
                  <p class="step-num">{{ item.step }}</p>
                  <div class="item-des">
                    <div class="img">
                      <img
                        v-if="locale === 'zh'"
                        :src="getImagePath1(item.img)"
                        alt=""
                      />
                      <img v-else :src="getImagePath1(item.imgEn)" alt="" />
                    </div>
                    <p class="title" :class="{ titleEn: locale === 'en' }">
                      {{ item.title }}
                    </p>
                    <hr />
                    <div>
                      <p class="text">{{ item.des }}</p>
                      <p class="text-s">{{ item.des2 }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </template>
          </div>
        </div>
      </div>
    </section>

    <!-- 活動區 -->
    <section id="activity">
      <div class="container w-1280">
        <div class="schedule">
          <h2 data-aos="fade-up">
            {{ $t("speed.activity.schedule.h2") }}
            <p class="sub">
              {{ $t("speed.activity.schedule.h2Sub") }}
            </p>
          </h2>
          <div class="visible-desktop">
            <img
              v-if="locale === 'zh'"
              src="@/assets/images/speed/img-schedule.svg"
              alt=""
            />
            <img
              v-else
              src="@/assets/images/speed/img-schedule_en.svg"
              alt=""
            />
          </div>
          <div class="visible-mobile">
            <img
              v-if="locale === 'zh'"
              src="@/assets/images/speed/img-schedule_m.svg"
              alt=""
            />
            <img
              v-else
              src="@/assets/images/speed/img-schedule_m_en.svg"
              alt=""
            />
          </div>
          <p class="remark">{{ $t("speed.activity.schedule.remark") }}</p>
        </div>
        <!-- 上傳區 -->
        <div id="upload" style="display: none;">
          <h2 data-aos="fade-up">
            {{ $t("speed.activity.upload.h2") }}
            <p class="sub">
              {{ $t("speed.activity.upload.h2Sub") }}
            </p>
          </h2>
          <div class="tabs-block" id="tabs-block">
            <div class="tabs-btn">
              <div
                class="tabs-item"
                :class="{ active: categoryName === '9' }"
                data-item="9"
                @click="tabsChange($event, 'upload')"
              >
                {{ $t("speed.activity.upload.category.item1.title") }}
              </div>
              <div
                class="tabs-item"
                :class="{ active: categoryName === '10' }"
                data-item="10"
                @click="tabsChange($event, 'upload')"
              >
                {{ $t("speed.activity.upload.category.item2.title") }}
              </div>
              <div
                class="tabs-item"
                :class="{ active: categoryName === '11' }"
                data-item="11"
                @click="tabsChange($event, 'upload')"
              >
                {{ $t("speed.activity.upload.category.item3.title") }}
              </div>
            </div>
            <!-- 基本 -->
            <div class="tabs-category">
              <template v-for="(item, index) in categoryItem" :key="index">
                <div :class="{ 'not-open': !item.open.basic }">
                  <div
                    class="category-style"
                    :class="
                      categoryName === item.category
                        ? ['active', 'show', categoryName]
                        : []
                    "
                  >
                    <div class="tabs-content upload-block">
                      <div class="upload-des">
                        {{ $t("speed.activity.upload.des") }}
                      </div>
                      <div class="upload-content">
                        <div class="upload-left">
                          <p class="demo-text">
                            {{ $t("speed.activity.upload.photo.demo") }}
                          </p>
                          <!-- <img
                            src="@/assets/images/speed/img-demo01.png"
                            alt=""
                          /> -->
                          <img
                            v-if="locale === 'zh'"
                            src="@/assets/images/speed/img-demo01_zh.png"
                            alt=""
                          />
                          <img
                            v-else
                            src="@/assets/images/speed/img-demo01_en.png"
                            alt=""
                          />
                        </div>
                        <div class="upload-right">
                          <div class="upload-style upload-textarea">
                            <p class="title">
                              {{ $t("speed.activity.upload.textarea") }}
                            </p>
                            <input
                              type="number"
                              name="uploadtext"
                              class="input-text"
                              :placeholder="10000"
                              v-model="uploadForm[index].steps"
                            />
                          </div>
                          <div class="photo-block">
                            <div class="upload-style upload-photo">
                              <p class="title">
                                {{ $t("speed.activity.upload.photo.title") }}
                              </p>
                              <!-- 照片上傳 -->
                              <div class="photo-upload">
                                <input
                                  type="file"
                                  :id="`upload-basic-${index}`"
                                  name="icon-upload.png"
                                  accept=".jpg, .jpeg, .png"
                                  @change="
                                    handleFileUpload(
                                      categoryName,
                                      'basic',
                                      $event
                                    )
                                  "
                                  :disabled="
                                    uploadForm[index].status_basic == 'approved'
                                  "
                                />
                                <label
                                  :for="`upload-basic-${index}`"
                                  class="upload-file"
                                >
                                  <img
                                    v-if="!uploadForm[index].url_upload_basic"
                                    class="icon-upload"
                                    src="@/assets/images/25th/icon-cloud.png"
                                    alt="上傳"
                                  />
                                  <p v-if="!uploadForm[index].url_upload_basic">
                                    {{ $t("25th.upload.photo.label") }}
                                  </p>
                                  <img
                                    v-if="uploadForm[index].url_upload_basic"
                                    :src="uploadForm[index].url_upload_basic"
                                    class=""
                                  />
                                </label>

                                <!-- 預覽與刪除 -->
                                <div
                                  class="preview"
                                  v-if="previewUrls[index].basic"
                                >
                                  <img
                                    :src="previewUrls[index].basic"
                                    alt="預覽圖片"
                                  />
                                  <div
                                    class="upload-del"
                                    @click="clearImage(categoryName, 'basic')"
                                  >
                                    <img
                                      src="@/assets/images/25th/icon-del.png"
                                      alt="刪除"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="upload-remark">
                            {{ $t("speed.activity.upload.remark") }}
                          </div>
                        </div>
                      </div>
                      <!-- btn -->
                      <div
                        class="submit-btn"
                        :class="{
                          disabled:
                            uploadForm[index].is_uploaded_basic &&
                            uploadForm[index].status_basic != 'approved',
                          success:
                            uploadForm[index].is_uploaded_basic &&
                            uploadForm[index].status_basic == 'approved',
                          end: !item.open.basic,
                        }"
                      >
                        <button
                          class="btn-style"
                          type="button"
                          @click="
                            uploadForm[index].status_basic != 'approved'
                              ? submitBasic(index)
                              : undefined
                          "
                        >
                          <!-- 按鈕3狀態 -->
                          <!-- 可上傳 -->
                          <template v-if="item.open.basic">
                            <span v-if="!uploadForm[index].is_uploaded_basic">{{
                              $t("speed.activity.upload.btn.submit")
                            }}</span>
                            <span
                              v-else-if="
                                uploadForm[index].is_uploaded_basic &&
                                uploadForm[index].status_basic == 'approved'
                              "
                              >{{
                                $t("speed.activity.upload.btn.success")
                              }}</span
                            >
                            <span
                              v-else="uploadForm[index].is_uploaded_basic"
                              >{{ $t("speed.activity.upload.btn.ing") }}</span
                            >
                          </template>
                          <!-- 不可上傳 -->
                          <template v-else>
                            <span v-if="item.basic.coming">
                              {{ $t("speed.activity.upload.btn.coming") }}
                            </span>
                            <span v-else-if="item.basic.end">
                              {{ $t("speed.activity.upload.btn.endBasic") }}
                            </span>
                          </template>
                        </button>
                        <p class="upload-remark">
                          {{ $t("quality.activity.upload.remark2") }}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </template>
            </div>
            <!-- 25 加碼 -->
            <div class="tabs-category bonus">
              <h2>
                {{ $t("speed.activity.bonus.h2") }}
                <p class="sub">
                  {{ $t("speed.activity.bonus.h2Sub") }}
                </p>
              </h2>
              <template v-for="(item, index) in categoryItem" :key="index">
                <div
                  class="category-style"
                  :class="[
                    categoryName === item.category
                      ? ['active', 'show', categoryName]
                      : [],
                    !item.open.bonus ? 'not-open' : '',
                  ]"
                >
                  <div class="tabs-content upload-block">
                    <div class="upload-des">
                      {{ $t("speed.activity.bonus.des.text1") }}
                      <a
                        v-if="locale === 'zh'"
                        href="https://www.youtube.com/shorts/jDABgYdgeiE"
                        target="_blank"
                      >
                        {{ $t("speed.activity.bonus.des.text2") }}
                        <fa icon="up-right-from-square" class="icon" />
                      </a>
                      <a
                        v-else
                        href="https://www.youtube.com/watch?v=7neHt3rhVKE"
                        target="_blank"
                      >
                        {{ $t("speed.activity.bonus.des.text2") }}
                        <fa icon="up-right-from-square" class="icon" />
                      </a>
                    </div>
                    <div class="upload-content">
                      <div class="upload-left">
                        <p class="demo-text">
                          {{ $t("speed.activity.upload.photo.demo") }}
                        </p>
                        <img
                          v-if="locale === 'zh'"
                          src="@/assets/images/speed/img-demo02_zh.png"
                          alt=""
                        />
                        <img
                          v-else
                          src="@/assets/images/speed/img-demo02_en.png"
                          alt=""
                        />
                      </div>
                      <div class="upload-right">
                        <div class="upload-style upload-textarea">
                          <p class="title">
                            {{ $t("speed.activity.bonus.textarea") }}
                          </p>
                          <textarea
                            name="uploadtext"
                            minlength="20"
                            class="input-text"
                            :placeholder="
                              $t('speed.activity.bonus.placeholder')
                            "
                            v-model="uploadForm[index].description"
                          ></textarea>
                        </div>
                        <div class="photo-block">
                          <!-- 25 截圖 -->
                          <div class="upload-style upload-photo">
                            <p class="title">
                              {{ $t("speed.activity.bonus.photo.item1.title") }}
                              <span class="sub-title">
                                {{ $t("speed.activity.bonus.photo.item1.des") }}
                              </span>
                            </p>
                            <!-- 照片上傳 -->
                            <div class="photo-upload">
                              <input
                                type="file"
                                :id="`upload-bonus-1-${index}`"
                                name="icon-upload.png"
                                accept=".jpg, .jpeg, .png"
                                @change="
                                  handleFileUpload(
                                    categoryName,
                                    'bonus_1',
                                    $event
                                  )
                                "
                                :disabled="
                                  uploadForm[index].status_bonus == 'approved'
                                "
                              />
                              <label
                                :for="`upload-bonus-1-${index}`"
                                class="upload-file"
                              >
                                <img
                                  v-if="!uploadForm[index].url_upload_bonus_1"
                                  class="icon-upload"
                                  src="@/assets/images/25th/icon-cloud.png"
                                  alt="上傳"
                                />
                                <p v-if="!uploadForm[index].url_upload_bonus_1">
                                  {{ $t("25th.upload.photo.label") }}
                                </p>
                                <img
                                  v-if="uploadForm[index].url_upload_bonus_1"
                                  :src="uploadForm[index].url_upload_bonus_1"
                                  class=""
                                />
                              </label>

                              <!-- 預覽與刪除 -->
                              <div
                                class="preview"
                                v-if="previewUrls[index].bonus_1"
                              >
                                <img
                                  :src="previewUrls[index].bonus_1"
                                  alt="預覽圖片"
                                />
                                <div
                                  class="upload-del"
                                  @click="clearImage(categoryName, 'bonus_1')"
                                >
                                  <img
                                    src="@/assets/images/25th/icon-del.png"
                                    alt="刪除"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <!-- 隨手拍照片 -->
                          <div class="upload-style upload-photo">
                            <p class="title">
                              {{ $t("speed.activity.bonus.photo.item2.title") }}
                              <span class="sub-title">{{
                                $t("speed.activity.bonus.photo.item2.des")
                              }}</span>
                            </p>
                            <!-- 照片上傳 -->
                            <div class="photo-upload">
                              <input
                                type="file"
                                :id="`upload-bonus-2-${index}`"
                                name="icon-upload.png"
                                accept=".jpg, .jpeg, .png"
                                @change="
                                  handleFileUpload(
                                    categoryName,
                                    'bonus_2',
                                    $event
                                  )
                                "
                                :disabled="
                                  uploadForm[index].status_bonus == 'approved'
                                "
                              />
                              <label
                                :for="`upload-bonus-2-${index}`"
                                class="upload-file"
                              >
                                <img
                                  v-if="!uploadForm[index].url_upload_bonus_2"
                                  class="icon-upload"
                                  src="@/assets/images/25th/icon-cloud.png"
                                  alt="上傳"
                                />
                                <p v-if="!uploadForm[index].url_upload_bonus_2">
                                  {{ $t("25th.upload.photo.label") }}
                                </p>
                                <img
                                  v-if="uploadForm[index].url_upload_bonus_2"
                                  :src="uploadForm[index].url_upload_bonus_2"
                                  class=""
                                />
                              </label>

                              <!-- 預覽與刪除 -->
                              <div
                                class="preview"
                                v-if="previewUrls[index].bonus_2"
                              >
                                <img
                                  :src="previewUrls[index].bonus_2"
                                  alt="預覽圖片"
                                />
                                <div
                                  class="upload-del"
                                  @click="clearImage(categoryName, 'bonus_2')"
                                >
                                  <img
                                    src="@/assets/images/25th/icon-del.png"
                                    alt="刪除"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="upload-remark">
                          {{ $t("speed.activity.bonus.remark") }}
                        </div>
                      </div>
                    </div>

                    <!-- btn -->
                    <div
                      class="submit-btn"
                      :class="{
                        disabled:
                          uploadForm[index].is_uploaded_bonus &&
                          uploadForm[index].status_bonus != 'approved',
                        end: !item.open.bonus,
                        success:
                          uploadForm[index].is_uploaded_bonus &&
                          uploadForm[index].status_bonus == 'approved',
                      }"
                    >
                      <button
                        class="btn-style"
                        type="button"
                        @click="
                          uploadForm[index].status_bonus != 'approved'
                            ? submitBonus(index)
                            : undefined
                        "
                      >
                        <!-- 按鈕3狀態 -->
                        <!-- 可上傳 -->
                        <template v-if="item.open.bonus">
                          <span v-if="!uploadForm[index].is_uploaded_bonus">
                            {{ $t("speed.activity.upload.btn.submit") }}
                          </span>
                          <span
                            v-else-if="
                              uploadForm[index].is_uploaded_bonus &&
                              uploadForm[index].status_bonus == 'approved'
                            "
                          >
                            {{ $t("speed.activity.upload.btn.success") }}
                          </span>
                          <span v-else="uploadForm[index].is_uploaded_bonus">
                            {{ $t("speed.activity.upload.btn.ing") }}
                          </span>
                        </template>
                        <!-- 不可上傳 -->
                        <template v-else>
                          <span v-if="!uploadForm[index].is_uploaded_bonus">
                            {{ $t("speed.activity.upload.btn.endBonus") }}
                          </span>
                          <span
                            v-else-if="
                              uploadForm[index].is_uploaded_bonus &&
                              uploadForm[index].status_bonus == 'approved'
                            "
                          >
                            {{ $t("speed.activity.upload.btn.success") }}
                          </span>
                          <span v-else="uploadForm[index].is_uploaded_bonus">
                            {{ $t("speed.activity.upload.btn.endBonus") }}
                          </span>
                        </template>
                      </button>

                      <p class="upload-remark">
                        {{ $t("quality.activity.upload.remark2") }}
                      </p>
                    </div>
                  </div>
                </div>
              </template>
            </div>
          </div>
        </div>
        <div class="ended">
          <h2>
            <p class="sub">{{ $t("speed.activity.ended.des") }}</p>
          </h2>
        </div>
      </div>
    </section>
    <!-- Notion -->
    <section id="notion">
      <div class="container w-1280">
        <div class="notion-content">
          <p>{{ $t("speed.notion.title") }}</p>
          <ul>
            <li v-for="(item, index) in 7" :key="index">
              {{ $t(`speed.notion.list${index + 1}`) }}
            </li>
            <li>
              {{ $t("25th.notion.list4-1") }}
              <a href="mailto:brandvivotek@accessus.biz">
                {{ $t("25th.notion.list4-2") }}</a
              >
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>
<script setup>
import { useAuthStore } from "@/stores/auth";
import { reactive } from "vue";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";

const { t, locale, setLocale } = useI18n();
const email = ref("");
const employeeId = ref("");
const errorMsg = ref(false);
const authStore = useAuthStore();
const router = useRouter();

const file = ref(null); // 存儲上傳的文件

const categoryName = ref("9");
const categoryVoteName = ref("9");
let categoryIndex = ref(0);

/* 動態圖片路徑 */
// Step
const glob1 = import.meta.glob("@/assets/images/speed/*", { eager: true });
// console.log(glob);
function getImagePath1(imageName) {
  const path = `/assets/images/speed/${imageName}`;
  return glob1[path]?.default || "";
}

// event
const glob2 = import.meta.glob("@/assets/images/speed/announcement/**/*", {
  eager: true,
});
function getImagePath2(imageName) {
  const path = `/assets/images/speed/announcement/${imageName}`;
  return glob2[path]?.default || "";
}

const announcementInfo = reactive([
  {
    category: "9",
    ranking: [
      {
        id: "1",
        name: "Fred H.",
        img1: "topic1/1-1.jpg",
        img2: "topic1/1-2.jpg",
        text: t("speed.activity.announcement.winner.sep.text1"),
        step: "1,109,784",
      },
      {
        id: "2",
        name: "Xin C.",
        img1: "topic1/2-1.jpg",
        img2: "topic1/2-2.jpg",
        text: t("speed.activity.announcement.winner.sep.text2"),
        step: "1,006,576",
      },
      {
        id: "3",
        name: "Only L.",
        img1: "topic1/3-1.jpg",
        img2: "topic1/3-2.jpg",
        text: t("speed.activity.announcement.winner.sep.text3"),
        step: "647,380",
      },
      {
        id: "4",
        name: "Jess C.",
        step: "555,246",
      },
      {
        id: "5",
        name: "Winy Y.",
        step: "553,955",
      },
      {
        id: "6",
        name: "Polly C.",
        step: "513,005",
      },
      {
        id: "7",
        name: "Chewei L.",
        step: "490,219",
      },
      {
        id: "8",
        name: "Shawn L.",
        step: "473,527",
      },
      {
        id: "9",
        name: "Ihan W.",
        step: "455,211",
      },
      {
        id: "10",
        name: "Sherry W.",
        step: "437,044",
      },
      {
        id: "11",
        name: "29xxx654 River C.",
        pd: t("quality.awards.announcement.submission") + "｜ US$50",
      },
    ],
  },
  {
    category: "10",
    ranking: [
      {
        id: "1",
        name: "Fred H.",
        img1: "topic2/1-1.jpg",
        img2: "topic2/1-2.jpg",
        img3: "topic2/1-3.jpg",
        text: t("speed.activity.announcement.winner.oct.text1"),
        step: "1,114,498",
      },
      {
        id: "2",
        name: "Winy Y.",
        img1: "topic2/2-1.jpg",
        img2: "topic2/2-2.jpg",
        img3: "topic2/2-3.jpg",
        text: t("speed.activity.announcement.winner.oct.text2"),
        step: "1,035,327",
      },
      {
        id: "3",
        name: "Xin C.",
        img1: "topic2/3-1.jpg",
        img2: "topic2/3-2.jpg",
        img3: "topic2/3-3.jpg",
        text: t("speed.activity.announcement.winner.oct.text3"),
        step: "1,010,949",
      },
      {
        id: "4",
        name: "Only L.",
        img1: "topic2/4.jpg",
        step: "627,662",
      },
      {
        id: "5",
        name: "Chewei L.",
        img1: "topic2/5.jpg",
        step: "585,821",
      },
      {
        id: "6",
        name: "Jess C.",
        img1: "topic2/6.jpg",
        step: "558,825",
      },
      {
        id: "7",
        name: "Sherry W.",
        img1: "topic2/7.jpg",
        step: "551,905",
      },
      {
        id: "8",
        name: "Polly C.",
        img1: "topic2/8.jpg",
        step: "535,009",
      },
      {
        id: "9",
        name: "Pei H.",
        img1: "topic2/9.jpg",
        step: "490,804",
      },
      {
        id: "10",
        name: "Ihan W.",
        img1: "topic2/10.jpg",
        step: "489,476",
      },
      {
        id: "11",
        name: "29xxx466 Ray C.",
        pd: t("quality.awards.announcement.submission") + "｜ US$50"
      }
    ],
  },
  {
    category: "11",
    ranking: [
      {
        id: "1",
        name: "Winy Y.",
        img1: "topic3/1-1.jpg",
        img2: "topic3/1-2.jpg",
        img3: "",
        text: t("speed.activity.announcement.winner.nov.text1"),
        step: "1,211,002",
      },
      {
        id: "2",
        name: "Fred H.",
        img1: "topic3/2-1.jpg",
        img2: "topic3/2-2.jpg",
        img3: "",
        text: t("speed.activity.announcement.winner.nov.text2"),
        step: "1,121,994",
      },
      {
        id: "3",
        name: "Xin C.",
        img1: "topic3/3-1.jpg",
        img2: "topic3/3-2.jpg",
        img3: "",
        text: t("speed.activity.announcement.winner.nov.text3"),
        step: "1,035,997",
      },
      {
        id: "4",
        name: "Chewei L.",
        img1: "topic3/4.jpg",
        step: "602,193",
      },
      {
        id: "5",
        name: "Only L.",
        img1: "topic3/5.jpg",
        step: "577,655",
      },
      {
        id: "6",
        name: "Ihan W.",
        img1: "topic3/6.jpg",
        step: "536,825",
      },
      {
        id: "7",
        name: "Jess C.",
        img1: "topic3/7.jpg",
        step: "529,204",
      },
      {
        id: "8",
        name: "Pei H.",
        img1: "topic3/8.jpg",
        step: "462,733",
      },
      {
        id: "9",
        name: "Ray C.",
        img1: "topic3/9.jpg",
        step: "453,204",
      },
      {
        id: "10",
        name: "Sherry W.",
        img1: "topic3/10.jpg",
        step: "449,361",
      },
      {
        id: "11",
        name: "29XXX183 Han S.",
        pd: t("quality.awards.announcement.submission") + "｜ US$50",
      },
      
    ],
  },
]);

const stepItem = reactive([
  {
    step: "Step 1",
    img: "img-step1.svg",
    imgEn: "img-step1.svg",
    title: t("speed.step.item1.title"),
    des: t("speed.step.item1.des"),
    des2: t("speed.step.item1.des2"),
  },
  {
    step: "Step 2",
    img: "img-step2.svg",
    imgEn: "img-step2.svg",
    title: t("speed.step.item2.title"),
    des: t("speed.step.item2.des"),
    des2: "",
  },
  {
    step: "Step 3",
    img: "img-step3.svg",
    imgEn: "img-step3_en.svg",
    title: t("speed.step.item3.title"),
    des: t("speed.step.item3.des"),
    des2: "",
  },
]);

// tabs 切換
const tabsChange = async (e, target) => {
  const dataItem = e.currentTarget.getAttribute("data-item");
  if (target === "upload") {
    categoryName.value = dataItem;
  } else if (target === "vote") {
    categoryVoteName.value = dataItem;
  }
};

const categoryItem = reactive([
  {
    category: "9",
    show: true,
    open: {
      basic: false,
      bonus: false,
    },
    basic: {
      coming: false,
      end: true,
    },
  },
  {
    category: "10",
    show: true,
    open: {
      basic: false,
      bonus: false,
    },
    basic: {
      coming: false,
      end: true,
    },
  },
  {
    category: "11",
    show: true,
    open: {
      basic: true,
      bonus: false,
    },
    basic: {
      coming: true,
      end: false,
    },
  },
]);

const uploadForm = reactive([
  {
    steps: null,
    description: "",
    status_basic: "pending",
    status_bonus: "pending",
    is_uploaded_basic: false,
    is_uploaded_bonus: false,
    file_upload_basic: null,
    file_upload_bonus_1: null,
    file_upload_bonus_2: null,
    url_upload_basic: null,
    url_upload_bonus_1: null,
    url_upload_bonus_2: null,
  },
  {
    steps: null,
    description: "",
    status_basic: "pending",
    status_bonus: "pending",
    is_uploaded_basic: false,
    is_uploaded_bonus: false,
    file_upload_basic: null,
    file_upload_bonus_1: null,
    file_upload_bonus_2: null,
    url_upload_basic: null,
    url_upload_bonus_1: null,
    url_upload_bonus_2: null,
  },
  {
    steps: null,
    description: "",
    status_basic: "pending",
    status_bonus: "pending",
    is_uploaded_basic: false,
    is_uploaded_bonus: false,
    file_upload_basic: null,
    file_upload_bonus_1: null,
    file_upload_bonus_2: null,
    url_upload_basic: null,
    url_upload_bonus_1: null,
    url_upload_bonus_2: null,
  },
]);

let uploadPhotoData = reactive([
  {
    basic: null,
    bonus_1: null,
    bonus_2: null,
  },
  {
    basic: null,
    bonus_1: null,
    bonus_2: null,
  },
  {
    basic: null,
    bonus_1: null,
    bonus_2: null,
  },
]);

const previewUrls = reactive([
  {
    basic: null,
    bonus_1: null,
    bonus_2: null,
  },
  {
    basic: null,
    bonus_1: null,
    bonus_2: null,
  },
  {
    basic: null,
    bonus_1: null,
    bonus_2: null,
  },
]);

const handleFileUpload = (category, type, e) => {
  const file = e.target.files[0];
  if (!file) return;

  if (category === "9") {
    categoryIndex = 0;
  } else if (category === "10") {
    categoryIndex = 1;
  } else {
    categoryIndex = 2;
  }

  const url = URL.createObjectURL(file);
  previewUrls[categoryIndex][type] = url;

  if (type === "basic") {
    uploadPhotoData[categoryIndex].basic = file;
    uploadForm[categoryIndex].file_upload_basic = file;
  } else if (type === "bonus_1") {
    uploadPhotoData[categoryIndex].bonus_1 = file;
    uploadForm[categoryIndex].file_upload_bonus_1 = file;
  } else if (type === "bonus_2") {
    uploadPhotoData[categoryIndex].bonus_2 = file;
    uploadForm[categoryIndex].file_upload_bonus_2 = file;
  }
};

// 清除圖片
const clearImage = (category, type) => {
  if (category === "9") {
    categoryIndex = 0;
  } else if (category === "10") {
    categoryIndex = 1;
  } else {
    categoryIndex = 2;
  }
  previewUrls[categoryIndex][type] = null;

  if (type === "basic") {
    uploadPhotoData[categoryIndex].basic = null;
    uploadForm[categoryIndex].file_upload_basic = null;
    document.getElementById(`upload-basic-${categoryIndex}`).value = "";
  } else if (type === "bonus_1") {
    uploadPhotoData[categoryIndex].bonus_1 = null;
    uploadForm[categoryIndex].file_upload_bonus_1 = null;
    document.getElementById(`upload-bonus-1-${categoryIndex}`).value = "";
  } else if (type === "bonus_2") {
    uploadPhotoData[categoryIndex].bonus_2 = null;
    uploadForm[categoryIndex].file_upload_bonus_2 = null;
    document.getElementById(`upload-bonus-2-${categoryIndex}`).value = "";
  }
};

const readUploadedContent = async () => {
  const res = await $fetch(`/api/activities/net-zero-walker`);
  // console.log(res)

  if (res.success) {
    uploadForm[0].steps = res.mission_1.steps;
    uploadForm[0].description = res.mission_1.description || "";
    uploadForm[0].is_uploaded_basic = res.mission_1.is_uploaded_basic;
    uploadForm[0].is_uploaded_bonus = res.mission_1.is_uploaded_bonus;
    uploadForm[0].url_upload_basic = res.mission_1.url_upload_basic;
    uploadForm[0].url_upload_bonus_1 = res.mission_1.url_upload_bonus_1;
    uploadForm[0].url_upload_bonus_2 = res.mission_1.url_upload_bonus_2;
    uploadForm[0].status_basic = res.mission_1.status_basic;
    uploadForm[0].status_bonus = res.mission_1.status_bonus;

    uploadForm[1].steps = res.mission_2.steps;
    uploadForm[1].description = res.mission_2.description || "";
    uploadForm[1].is_uploaded_basic = res.mission_2.is_uploaded_basic;
    uploadForm[1].is_uploaded_bonus = res.mission_2.is_uploaded_bonus;
    uploadForm[1].url_upload_basic = res.mission_2.url_upload_basic;
    uploadForm[1].url_upload_bonus_1 = res.mission_2.url_upload_bonus_1;
    uploadForm[1].url_upload_bonus_2 = res.mission_2.url_upload_bonus_2;
    uploadForm[1].status_basic = res.mission_2.status_basic;
    uploadForm[1].status_bonus = res.mission_2.status_bonus;

    uploadForm[2].steps = res.mission_3.steps;
    uploadForm[2].description = res.mission_3.description || "";
    uploadForm[2].is_uploaded_basic = res.mission_3.is_uploaded_basic;
    uploadForm[2].is_uploaded_bonus = res.mission_3.is_uploaded_bonus;
    uploadForm[2].url_upload_basic = res.mission_3.url_upload_basic;
    uploadForm[2].url_upload_bonus_1 = res.mission_3.url_upload_bonus_1;
    uploadForm[2].url_upload_bonus_2 = res.mission_3.url_upload_bonus_2;
    uploadForm[2].status_basic = res.mission_3.status_basic;
    uploadForm[2].status_bonus = res.mission_3.status_bonus;
  }
};

const submitBasic = async (index) => {
  if (!uploadForm[index].is_uploaded_basic && !uploadPhotoData[index].basic) {
    alert(t("speed.activity.upload.alert.base"));
    return;
  } else if (!uploadForm[index].steps) {
    alert(t("speed.activity.upload.alert.text"));
    return;
  }

  // 進一步處理提交邏輯
  const form = new FormData();
  Object.keys(uploadForm[index]).forEach((key) => {
    if (uploadForm[index][key]) {
      form.append(key, uploadForm[index][key]);
    }
  });
  const res = await $fetch(
    `/api/activities/net-zero-walker/mission/${index + 1}/basic`,
    {
      method: "POST",
      body: form,
    }
  );

  if (res.success) {
    alert(t("quality.activity.upload.alert.success"));
    readUploadedContent();

    // TODO: 清除預覽移除按鈕...
  } else {
    alert(t("quality.activity.upload.alert.fail"));
  }
};

const submitBonus = async (index) => {
  if (
    !uploadForm[index].is_uploaded_bonus &&
    (!uploadPhotoData[index].bonus_1 || !uploadPhotoData[index].bonus_2)
  ) {
    alert(t("speed.activity.upload.alert.base"));
    return;
  } else if (!uploadForm[index].description) {
    alert(t("speed.activity.upload.alert.bonusText"));
    return;
  }

  // 進一步處理提交邏輯
  const form = new FormData();
  Object.keys(uploadForm[index]).forEach((key) => {
    if (uploadForm[index][key]) {
      form.append(key, uploadForm[index][key]);
    }
  });
  const res = await $fetch(
    `/api/activities/net-zero-walker/mission/${index + 1}/bonus`,
    {
      method: "POST",
      body: form,
    }
  );

  if (res.success) {
    alert(t("quality.activity.upload.alert.success"));
    readUploadedContent();

    // TODO: 清除預覽移除按鈕...
  } else {
    alert(t("quality.activity.upload.alert.fail"));
  }
};

onMounted(() => {
  AOS.init({
    anchorPlacement: "top-bottom",
  });

  readUploadedContent();
});

definePageMeta({
  middleware: "auth",
});
</script>
<style lang="scss">
$th25ImgUrl: "@/assets/images/25th/";
$qualityImgUrl: "@/assets/images/quality/";
$speedImgUrl: "@/assets/images/speed/";

#speed {
  .kv {
    position: relative;
    width: 100vw;
    height: vwXL(850);
    // background: url($speedImgUrl + "bg-kv.png") no-repeat top/cover #7BCED7;
    background: #7bced7;
    overflow: hidden;

    @include mobile {
      width: 100%;
      height: vw(850);
      background: url($speedImgUrl + "bg-kv_m.png") no-repeat top/cover #c5faff;
    }

    .img {
      &-kv {
        position: absolute;
        &.item {
          &-1 {
            width: vwXL(1920);
            z-index: 1;
            top: 0;
          }
          &-2 {
            width: vwXL(1920);
            top: 0;
            z-index: 0;
          }
          &-3 {
            width: vwXL(1461);
            top: vwXL(340);
            left: vwXL(146);
            z-index: 2;
          }
          &-4 {
            width: vwXL(1700);
            top: vwXL(80);
            left: vwXL(180);
            z-index: 2;
          }
        }
      }

      &-logo {
        position: absolute;
        top: vwXL(55);
        left: 50%;
        transform: translateX(-50%);
        width: vwXL(260);
        @include mobile {
          top: vwXL(205);
          width: vw(260);
        }
      }
    }
  }

  #intro {
    // background: url($qualityImgUrl + "bg-intro.png") no-repeat center 83% /
    //   cover #daf1f3;

    .des {
      @include flex-center;
      flex-direction: column;
      gap: 24px;
      text-align: center;

      @include mobile {
        gap: vw(24);
      }

      h3 {
        color: $primaryColorDarkBlue;
        text-transform: uppercase;

        .sub {
          font-size: 40px;
          line-height: 48px;
          display: block;
          color: $primaryColorDarkBlack;

          @include mobile {
            font-size: vw(40);
            line-height: vw(48);
          }
        }

        .style-origin {
          color: $primaryColorDarkBlack;
        }
      }
    }

    .link {
      font-size: 26px;
      font-weight: 600;
      color: $primaryColorDarkBlue;
      @include flex-center;
      flex-direction: column;
      transform: translateY(0);
      animation: link-act 1s infinite;

      @keyframes link-act {
        0% {
          transform: translateY(0);
        }

        50% {
          transform: translateY(15%);
        }

        100% {
          transform: translateY(0);
        }
      }

      @include mobile {
        font-size: vw(26);
      }

      .icon {
        width: 16px;

        @include mobile {
          width: vw(16);
        }
      }
    }
  }

  #description {
    background: url($speedImgUrl + "bg-description.jpg") no-repeat bottom/cover
      #bdeeec;

    .count {
      .count-intro {
        @include grid-style(center, stretch);
        grid-template-columns: repeat(2, auto);
        gap: 36px;

        @include mobile {
          gap: vw(36);
        }
      }

      .block-style01 {
        .title {
          padding: 12px 0;

          @include mobile {
            padding: vw(12) 0;
          }
        }

        .content {
          .text {
            text-align: center;
            font-size: 22px;
            line-height: 30px;
            color: $secondaryColorDarkGray;
            font-weight: 500;
            white-space: pre-line;

            @include mobile {
              font-size: vw(22);
              line-height: vw(30);
            }
          }
        }
      }
    }

    .awards {
      width: 100%;

      .awards-intro {
        @include grid-style(space-between, center);
        grid-template-columns: repeat(3, auto);
        gap: 36px;

        @include mobile {
          gap: vw(36);
          grid-template-columns: 1fr;
        }

        .awards-item {
          background: #fff;
          border-top-right-radius: 12px;
          border-bottom-right-radius: 12px;
          border-left: 10px solid $primaryColorDarkBlue;
          padding: vwXL(26) vwXL(48);
          @include flex-style(flex-start, center);
          gap: 16px;

          @include mobile {
            @include flex-style(center, center);
            border-top-right-radius: vw(12);
            border-bottom-right-radius: vw(12);
            border-left: vw(10) solid $primaryColorDarkBlue;
            gap: vw(20);
            padding: vw(26) vw(48);
          }

          .awards-img {
            max-width: 80px;

            @include mobile {
              max-width: vw(80);
            }
          }

          .awards-content {
            font-weight: 600;
            font-size: 24px;
            line-height: 30px;
            @include flex-style(center, flex-start);
            flex-direction: column;
            gap: 8px;

            @include mobile {
              @include flex-style(center, center);
              flex-direction: row;
              font-size: vw(24);
              line-height: vw(30);
              gap: vw(8);
            }

            .awards-title {
              display: inline-block;
              background: $primaryColorDarkBlue;
              border-radius: 12px;
              color: #fff;
              padding: 8px 16px;

              @include mobile {
                border-radius: vw(12);
                padding: vw(8) vw(16);
              }
            }

            .awards-text {
              font-size: 24px;
              @include flex-style(flex-start, center);
              gap: 4px;
              word-break: keep-all;
              flex-wrap: wrap;

              @include mobile {
                font-size: vw(24);
                gap: vw(4);
              }
            }
          }
        }
      }

      .awards-others {
        margin-top: 50px;
        width: 100%;
        display: block;

        .awards-item {
          @include grid-style(flex-start, center);
          grid-template-columns: 1fr 1fr;

          @include tablet {
            grid-template-columns: 1fr;
          }

          .awards-content {
            flex-direction: row;
            align-items: center;
            justify-content: flex-start;
            gap: 16px;

            @include mobile {
              gap: vw(16);
              justify-content: center;
            }

            .awards-title {
              max-width: 220px;
              width: 100%;
              text-align: center;

              @include mobile {
                max-width: vw(220);
              }
            }

            img {
              max-width: 50px;
              margin-left: 8px;
              @include mobile {
                max-width: vw(45);
              }
            }

            .text-s {
              font-size: 16px;

              @include mobile {
                font-size: vw(16);
                padding-top: vw(5);
              }
            }
            &:nth-child(3) {
              grid-column: 1 / -1;
            }
          }
        }
      }
    }
    .announcement {
      .tabs-block .tabs-btn .tabs-item.active {
        background: rgb(67 86 255 / 10%);
        border: 2px solid $primaryColorDarkBlue;
        color: $primaryColorDarkBlue;
        @include mobile {
          border: vw(2) solid $primaryColorDarkBlue;
        }
      }
      .tabs-content {
        padding: 0;
        background: transparent;
      }
      .content {
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: vwXL(24);

        @include mobile {
          grid-template-columns: 1fr;
          gap: vw(16);
        }
        .item {
          border: 1px solid $secondaryColorGray;
          padding: vwXL(24);
          border-radius: vwXL(24);
          width: 100%;
          @include flex-style(flex-start, center);
          flex-direction: column;
          gap: vwXL(24);
          background: #fff;

          @include mobile {
            padding: vw(48);
            border-radius: vw(24);
            gap: vw(12);
          }
          .ranking-style {
            @include flex-style(center, center);
            gap: 8px;
            width: vwXL(328);
            padding: vwXL(12) vwXL(16);
            border-radius: vwXL(12);
            font-size: 28px;
            font-weight: 700;
            background: $primaryColorDarkBlue;
            color: #fff;
            @include mobile {
              gap: vw(8);
              padding: vw(8);
              border-radius: vw(12);
              font-size: vw(24);
              width: vw(615);
            }
            img {
              width: 100%;
              max-width: 40px;
              @include mobile {
                width: vw(40);
              }
            }
          }

          .employee {
            width: 100%;
            @include flex-center;
            flex-direction: column;
            gap: vwXL(16);

            @include mobile {
              gap: vw(16);
            }

            .name {
              width: 100%;
              font-size: 24px;
              text-align: center;
              font-weight: 700;
              border-bottom: 1px solid $secondaryColorDarkGray;
              padding-bottom: 12px;
              @include mobile {
                font-size: vw(24);
                padding-bottom: vw(12);
              }
            }
            .step {
              display: block;
              font-size: 20px;
              line-height: 25px;
            }
            .swiper_block {
              width: 100%;
            }
            .swiper-slide {
              border-radius: vwXL(8);
              overflow: hidden;
              width: 100%;
              background: #f5f5f5;
              @include flex-center;
              @include mobile {
                border-radius: vw(12);
              }
              img {
                height: 100%;
                object-fit: contain;
              }
            }

            .mainSwiper {
              width: vwXL(328);
              height: vwXL(328);
              margin-bottom: vwXL(16);
              @include mobile {
                width: vw(615);
                height: vw(615);
                margin-bottom: vw(16);
              }
            }
            .thumbsSwiper {
              width: vwXL(328);
              height: vwXL(104);
              @include flex-center;
              @include mobile {
                width: vw(615);
                height: vw(195);
              }

              .swiper-slide {
                width: vwXL(104);
                @include mobile {
                  width: vw(104);
                }
              }
              img {
                cursor: pointer;
              }
              .swiper-slide {
                opacity: 0.5;
              }
              .swiper-slide-thumb-active {
                opacity: 1;
              }
            }

            .text {
              font-size: 16px;
              line-height: 1.2;
              white-space: pre-line;
              @include mobile {
                font-size: vw(16);
              }
            }
          }
          .submit-btn {
            .btn-style {
              background: $primaryColorBlueLogo;
              &::after {
                content: none;
              }
            }
            &.success {
              .btn-style {
                background: $primaryColorAquaBlue;
                &::after {
                  content: "";
                  background: url($qualityImgUrl + "icon-star.svg") no-repeat
                    bottom / cover;
                }
              }
            }
          }
        }
      }
      .another {
        grid-template-columns: 1fr;
        .item {
          align-items: flex-start;
          flex-direction: row;
          gap: vwXL(48);
          @include mobile {
            flex-direction: column;
          }

          .ranking-style {
            width: 100%;
          }

          .list {
            @include flex-center;
            flex-direction: column;
            gap: 24px;
            width: 100%;
            @include mobile {
              gap: vw(30);
            }
          }
          .list-content {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            gap: 20px;
            width: 100%;
            @include mobile {
              grid-template-columns: 1fr 1fr;
              gap: vw(24);
            }
          }
          .employee {
            padding: 12px 24px;
            @include flex-center;
            background: #f5f5f5;
            border-radius: 12px;
            width: 100%;
            @include mobile {
              padding: vw(12) vw(24);
              border-radius: vw(12);
            }
            .name {
              border-bottom: none;
              @include flex-style(flex-start, center);
              gap: 12px;
              font-size: 20px;
              padding-bottom: 0;
              @include mobile {
                gap: vw(12);
                font-size: vw(20);
              }
            }
            .step {
              text-align: left;
              font-size: 16px;
              line-height: 20px;
              strong {
                font-size: 20px;
              }
            }
            .num {
              display: block;
              background: $primaryColorDarkBlue;
              color: #fff;
              border-radius: 1000px;
              width: 28px;
              height: 28px;
              font-size: 16px;
              min-width: 28px;
              @include flex-style(center, center);
              @include mobile {
                width: vw(28);
                height: vw(28);
                font-size: vw(16);
              }
            }
            img {
              max-width: 104px;
              width: 100%;
              border-radius: 12px;
              @include mobile {
                border-radius: vw(12);
              }
            }
          }
          .lucky-star {
            max-width: 400px;
            width: 100%;
            @include mobile {
              max-width: none;
            }
            .list-content {
              grid-template-columns: 1fr;
              width: 100%;
            }
            .ranking-style {
              background: $primaryColorPurple;
            }
            img {
              width: 100%;
              max-width: 28px;
              @include mobile {
                max-width: vw(28);
              }
            }
            .name {
              text-align: left;
              justify-content: flex-start;
              line-height: 25px;
              @include mobile {
                justify-content: center;
                line-height: vw(25);
              }
            }
          }
        }
      }
      .remark {
        font-size: 18px;
        text-align: center;
        margin-top: 24px;
      }
    }
  }

  #three-step {
    background: url($speedImgUrl + "bg-step.jpg") no-repeat bottom/cover #bdeeec;
    .step {
      .step-content {
        .step-item {
          .step-num {
            background: $primaryColorAquaBlue;
          }
          .text {
            text-align: center;
          }
          .item-content .item-des .img {
            max-width: 275px;
          }
        }

        .step-arrow {
          background-color: $primaryColorAquaBlue;
        }
      }
    }
  }

  swiper-slide {
    width: 100%;
  }
  #activity {
    background: url($speedImgUrl + "bg-activity.jpg") no-repeat bottom / cover
      #d3e5f5;
    padding-bottom: 50px;
    @include mobile {
      background: url($speedImgUrl + "bg-activity.jpg") no-repeat bottom /
        contain #d3e5f5;
      padding-bottom: 0;
    }

    %date-style {
      @include flex-style(center, center);
      gap: 20px;

      @include mobile {
        @include flex-style(center, flex-start);
        flex-direction: column;
        gap: vw(20);
        width: 100%;
      }

      span {
        font-size: 25px;
        text-align: center;
        @include flex-style(center, center);
        gap: 8px;
        font-weight: 500;

        @include mobile {
          font-size: vw(25);
          gap: vw(8);
        }

        &:before {
          content: "";
          display: block;
          width: 20px;
          height: 20px;
          background: url($th25ImgUrl + "icon-arrow3.svg") no-repeat
            center/cover;

          @include mobile {
            width: vw(20);
            height: vw(20);
          }
        }
      }
    }

    .schedule {
      img {
        max-width: 1280px;

        @include mobile {
          max-width: vw(768);
        }
      }
      .remark {
        font-size: 18px;
        text-align: center;
        margin-top: 24px;
        @include mobile {
          font-size: vw(18);
          margin-top: vw(24);
        }
      }
    }

    #upload {
      width: 100%;
      .upload-block {
        .upload-content {
          @include flex-style(space-between, center);
          gap: 50px;
          width: 100%;

          @include mobile {
            flex-direction: column;
            gap: vw(40);
          }

          .upload-right {
            textarea {
              max-width: none;
            }

            .photo-block {
              width: 100%;
              display: grid;
              grid-template-columns: 1fr 1fr;
              gap: 24px;

              @include mobile {
                gap: vw(24);
              }

              .upload-style {
                @include flex-style(center, center);
              }
            }
          }

          .upload-left {
            @include flex-center;
            flex-direction: column;
            gap: 16px;
            max-width: 524px;
            min-width: 200px;

            @include mobile {
              max-width: vw(470);
            }

            p {
              width: 100%;
              font-size: 20px;
              font-weight: 600;
              text-align: left;

              @include mobile {
                font-size: vw(20);
              }
            }
          }
        }

        .submit-btn {
          @include flex-style(center, center);
          flex-direction: column;
          gap: 8px;

          @include mobile {
            gap: vw(12);
          }

          .checkbox-btn {
            @include flex-style(center, center);
            gap: 8px;

            @include mobile {
              gap: vw(8);
            }

            input[type="checkbox"] {
              width: 18px;
              height: 18px;

              @include mobile {
                width: vw(18);
                height: vw(18);
              }
            }
          }
          // 審核中 / 重新
          &.disabled {
            .btn-style {
              background: $primaryColorBlueLogo;
            }
          }
          &.end {
            .btn-style {
              background: $secondaryColorDarkGray;
              &::after {
                display: none;
              }
            }
          }
          // 審核通過
          &.success {
            .btn-style {
              background: $primaryColorAquaBlue;
              &::after {
                display: block;
                background: url($qualityImgUrl + "icon-check-circle.svg")
                  no-repeat bottom / cover;
              }
            }
          }
        }
        .upload-remark {
          font-size: 12px;
          line-height: 20px;
          @include flex-style(flex-end, flex-start);
          flex-direction: column;
          white-space: pre-line;
          width: 100%;

          @include mobile {
            font-size: vw(14);
            line-height: vw(20);
          }
        }
      }

      .bonus {
        margin-top: 80px;
      }
      .not-open {
        pointer-events: none;
      }
    }
  }

  #notion {
    .container {
      padding: 80px 20px;
    }
  }
}
</style>
