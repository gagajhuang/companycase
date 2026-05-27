<template>
  <div id="quality">
    <!-- 動畫最後做 -->
    <div class="kv">
      <div class="visible-desktop">
        <div class="img-people" data-aos="fade-up" data-aos-duration="1000">
          <img src="@/assets/images/quality/img-kv1.png" alt="" />
        </div>
      </div>
      <div class="img-logo">
        <img
          v-if="locale === 'zh'"
          src="@/assets/images/quality/img-kv-logo.png"
          alt=""
        />
        <img v-else src="@/assets/images/quality/img-kv-logo_en.png" alt="" />
      </div>
    </div>
    <!-- 前言 -->
    <section id="intro">
      <div class="container">
        <div class="des">
          <h3 data-aos="fade-up">
            <!-- <span class="sub">{{ $t('25th.intro.h3Sub') }}</span> -->
            quaility
            <span class="style-origin">MAKES TOMORROW EASIER, TODAY!</span>
          </h3>
          <h4>
            {{ $t("quality.intro.h4") }}
            <span class="text-dark-blue">{{ $t("quality.intro.h4-num1") }}</span
            >{{ $t("quality.intro.h4-text2") }}
            <span class="text-dark-blue">{{ $t("quality.intro.h4-num2") }}</span
            >{{ $t("quality.intro.h4-text3") }}
          </h4>
          <!-- btn -->
          <nuxt-link class="link" to="#activity">
            {{ $t("quality.intro.btn") }}
            <fa icon="angles-down" class="icon" />
          </nuxt-link>
        </div>

        <!-- Step -->
        <div class="step">
          <h2 data-aos="fade-up">
            {{ $t("quality.step.h2") }}
            <p class="sub">
              {{ $t("quality.step.h2Sub") }}
            </p>
          </h2>
          <h2 data-aos="fade-up">
            {{ $t("quality.step.h2Text") }}
          </h2>
          <div class="step-content">
            <template v-for="(item, index) in stepItem" :key="index">
              <div class="step-item">
                <div class="item-content">
                  <p class="step-num">{{ item.step }}</p>
                  <div class="item-des">
                    <div class="img">
                      <img :src="getImagePath1(item.img)" alt="" />
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
              <div
                v-if="index < stepItem.length - 1"
                class="step-arrow"
                :key="'arrow-' + index"
              ></div>
            </template>
          </div>
        </div>
      </div>
    </section>

    <!-- 活動說明 -->
    <section id="description">
      <div class="container w-1200">
        <!-- 積分 -->
        <div class="count">
          <h2 data-aos="fade-up">
            {{ $t("quality.description.h2") }}
            <p class="sub">
              {{ $t("quality.description.h2Sub") }}
            </p>
          </h2>
          <div class="count-intro">
            <div class="block-style01">
              <div class="title title-blue2">
                {{ $t("quality.description.item1.title") }}
              </div>
              <div class="content">
                <div class="text">
                  {{ $t("quality.description.item1.des1") }}
                  <br />
                  <span class="text-logo-blue">
                    {{ $t("quality.description.item1.des2") }}
                    <b class="weight-700"> 20 </b>
                    {{ $t("quality.description.points") }}
                  </span>
                  <span v-if="locale === 'en'">.</span>
                </div>
              </div>
            </div>
            <div class="block-style01">
              <div class="title title-blue2">
                {{ $t("quality.description.item2.title") }}
              </div>
              <div class="content">
                <div class="text">
                  {{ $t("quality.description.item2.des1") }}
                  <span class="text-logo-blue">
                    <b class="weight-700"> 30/20/10 </b>
                    {{ $t("quality.description.points") }}
                  </span>
                  <span v-if="locale === 'en'">.</span>
                </div>
                <div class="text">
                  {{ $t("quality.description.item2.des2") }}
                  <span class="text-logo-blue">
                    <b class="weight-700"> 20 </b>
                    {{ $t("quality.description.points") }}
                  </span>
                  <span v-if="locale === 'en'">.</span>
                </div>
              </div>
            </div>
            <div class="block-style01">
              <div class="title title-purple">
                {{ $t("quality.description.item3.title") }}
              </div>
              <div class="content">
                <div class="text">
                  {{ $t("quality.description.item3.des1") }}
                  <span class="text-logo-blue">
                    <b class="weight-700"> 10 </b>
                    {{ $t("quality.description.points") }}
                  </span>
                  <span v-if="locale === 'en'">.</span>
                </div>
                <div class="text">
                  {{ $t("quality.description.item3.des2") }}
                  <span class="text-logo-blue">
                    <b class="weight-700"> 10 </b>
                    {{ $t("quality.description.points") }}
                  </span>
                  <span v-if="locale === 'en'">.</span>
                </div>
              </div>
            </div>
            <div class="block-style01">
              <div class="title title-purple">
                {{ $t("quality.description.item4.title") }}
              </div>
              <div class="content">
                <div class="text">
                  {{ $t("quality.description.item4.des1-1") }}
                  <span
                    class="text-logo-blue weight-700"
                    v-if="locale === 'zh'"
                  >
                    25
                  </span>
                  {{ $t("quality.description.item4.des1-2") }}
                  <span class="text-logo-blue" v-if="locale === 'zh'">
                    <b class="weight-700"> 10</b>
                    {{ $t("quality.description.points") }}
                  </span>
                </div>
                <div class="text">
                  {{ $t("quality.description.item4.des2") }}
                  <span class="text-logo-blue">
                    <b class="weight-700"> 30 </b>
                    {{ $t("quality.description.points") }}
                  </span>
                  <span v-if="locale === 'en'"
                    >{{ $t("quality.description.item4.des3") }}.</span
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 獎項 -->
        <div class="awards">
          <h2 data-aos="fade-up">
            {{ $t("quality.awards.h2") }}
          </h2>
          <div class="awards-intro">
            <div class="awards-item">
              <div class="awards-img">
                <img src="@/assets/images/quality/img-award1.svg" alt="" />
              </div>
              <div class="awards-content">
                <p class="awards-title">
                  {{ $t("quality.awards.item1.title") }}
                </p>
                <p class="awards-text">
                  {{ $t("quality.awards.itemDes") }}
                  <span class="text-dark-blue weight-700">US$300</span>
                </p>
              </div>
            </div>
            <div class="awards-item">
              <div class="awards-img">
                <img src="@/assets/images/quality/img-award2.svg" alt="" />
              </div>
              <div class="awards-content">
                <p class="awards-title">
                  {{ $t("quality.awards.item2.title") }}
                </p>
                <p class="awards-text">
                  {{ $t("quality.awards.itemDes") }}
                  <span class="text-dark-blue weight-700">US$200</span>
                </p>
              </div>
            </div>
            <div class="awards-item">
              <div class="awards-img">
                <img src="@/assets/images/quality/img-award3.svg" alt="" />
              </div>
              <div class="awards-content">
                <p class="awards-title">
                  {{ $t("quality.awards.item3.title") }}
                </p>
                <p class="awards-text">
                  {{ $t("quality.awards.itemDes") }}
                  <span class="text-dark-blue weight-700">US$100</span>
                </p>
              </div>
            </div>
          </div>
          <div class="awards-intro awards-others">
            <div class="awards-item">
              <div class="awards-content">
                <p class="awards-title">
                  {{ $t("quality.awards.item4.title") }}
                </p>
                <p class="awards-text">
                  <span>
                    {{ $t("quality.awards.itemDes")
                    }}<b class="text-dark-blue">{{
                      $t("quality.awards.item4.des")
                    }}</b>
                  </span>
                  <span class="text-dark-blue">
                    <b class="weight-700">US$50</b>
                  </span>
                </p>
              </div>
              <div class="awards-content">
                <p class="awards-title">
                  {{ $t("quality.awards.item5.title") }}
                </p>
                <p class="awards-text">
                  {{ $t("quality.awards.itemDes") }}
                  <span class="text-dark-blue weight-700">US$50</span>
                  <span class="text-s">{{
                    $t("quality.awards.item5.des")
                  }}</span>
                </p>
              </div>
              <div class="awards-content">
                <p class="awards-title">
                  {{ $t("quality.awards.item6.title") }}
                </p>
                <p class="awards-text">
                  <span>
                    {{ $t("quality.awards.itemDes")
                    }}<b class="text-dark-blue">
                      {{ $t("quality.awards.item6.des") }}
                    </b>
                  </span>
                  <img src="@/assets/images/quality/icon-gift.svg" alt="" />
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
                :class="{ active: categoryVoteName === 'voteWork' }"
                data-item="voteWork"
                @click="tabsChange($event, 'vote')"
              >
                {{ $t("quality.activity.upload.category.item1.title") }}
              </div>
              <div
                class="tabs-item"
                :class="{ active: categoryVoteName === 'voteTravel' }"
                data-item="voteTravel"
                @click="tabsChange($event, 'vote')"
              >
                {{ $t("quality.activity.upload.category.item2.title") }}
              </div>
              <div
                class="tabs-item"
                :class="{ active: categoryVoteName === 'voteCity' }"
                data-item="voteCity"
                @click="tabsChange($event, 'vote')"
              >
                {{ $t("quality.activity.upload.category.item3.title") }}
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
                              <ThumbsImageAwards :voteData="itemR" />
                            </div>
                            <p class="name">{{ itemR.name }}</p>
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
                                  {{ itemR.name }}
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
        </div>
      </div>
    </section>

    <!-- 活動區 -->
    <section id="activity">
      <div class="container w-1280">
        <div class="schedule">
          <h2 data-aos="fade-up">{{ $t("quality.activity.schedule.h2") }}</h2>
          <div class="visible-desktop">
            <img
              v-if="locale === 'zh'"
              src="@/assets/images/quality/img-schedule.png"
              alt=""
            />
            <img
              v-else
              src="@/assets/images/quality/img-schedule_en.png"
              alt=""
            />
          </div>
          <div class="visible-mobile">
            <img
              v-if="locale === 'zh'"
              src="@/assets/images/quality/img-schedule_m.png"
              alt=""
            />
            <img
              v-else
              src="@/assets/images/quality/img-schedule_m_en.png"
              alt=""
            />
          </div>
        </div>
        <!-- topic -->
        <div class="step topic">
          <h2 data-aos="fade-up">{{ $t("quality.activity.topic.h2") }}</h2>
          <div class="step-content">
            <div
              class="step-item"
              v-for="(item, index) in topicItem"
              :key="index"
            >
              <div class="item-content">
                <p class="step-num">{{ item.step }}</p>
                <div class="item-des">
                  <div class="img">
                    <img :src="getImagePath1(item.img)" alt="" />
                  </div>
                  <p class="title" :class="{ titleEn: locale === 'en' }">
                    {{ item.title }}
                  </p>
                  <hr />
                  <div>
                    <p class="text">{{ item.des }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 上傳區 -->
        <div id="upload" style="display: none">
          <h2 data-aos="fade-up">{{ $t("quality.activity.upload.h2") }}</h2>
          <div class="tabs-block" id="tabs-block">
            <div class="tabs-btn">
              <div
                class="tabs-item"
                :class="{ active: categoryName === 'work' }"
                data-item="work"
                @click="tabsChange($event, 'upload')"
              >
                {{ $t("quality.activity.upload.category.item1.title") }}
              </div>
              <div
                class="tabs-item"
                :class="{ active: categoryName === 'travel' }"
                data-item="travel"
                @click="tabsChange($event, 'upload')"
              >
                {{ $t("quality.activity.upload.category.item2.title") }}
              </div>
              <div
                class="tabs-item"
                :class="{ active: categoryName === 'city' }"
                data-item="city"
                @click="tabsChange($event, 'upload')"
              >
                {{ $t("quality.activity.upload.category.item3.title") }}
              </div>
            </div>
            <div class="tabs-category">
              <template v-for="(item, index) in categoryItem" :key="index">
                <div
                  class="category-style"
                  :class="
                    categoryName === item.category
                      ? ['active', 'show', categoryName]
                      : []
                  "
                >
                  <div class="tabs-content upload-block">
                    <div class="upload-title">
                      {{ item.title }}
                    </div>
                    <div class="upload-content">
                      <div class="upload-left">
                        <img
                          v-if="locale === 'zh'"
                          :src="getImagePath1(item.img)"
                          alt=""
                        />
                        <img v-else :src="getImagePath1(item.imgEn)" alt="" />
                      </div>
                      <div class="upload-right">
                        <div class="upload-style upload-textarea">
                          <textarea
                            name="uploadtext"
                            minlength="20"
                            class="input-text"
                            :placeholder="
                              $t('quality.activity.upload.placeholder')
                            "
                            v-model="uploadForm[index].description"
                          ></textarea>
                        </div>
                        <div class="photo-block">
                          <!-- 產品照 -->
                          <div class="upload-style upload-photo">
                            <p class="title">
                              {{ $t("quality.activity.upload.photo.pd.title") }}
                              <span class="sub-title">{{
                                $t("quality.activity.upload.photo.pd.des")
                              }}</span>
                            </p>
                            <!-- 照片上傳 -->
                            <div class="photo-upload">
                              <input
                                type="file"
                                :id="`upload-pd-${index}`"
                                name="icon-upload.png"
                                accept=".jpg, .jpeg, .png"
                                @change="
                                  handleFileUpload(categoryName, 'pd', $event)
                                "
                                :disabled="
                                  uploadForm[index].status_1 == 'approved' ||
                                  uploadForm[index].status_2 == 'approved' ||
                                  uploadForm[index].status_3 == 'approved'
                                "
                              />
                              <label
                                :for="`upload-pd-${index}`"
                                class="upload-file"
                              >
                                <img
                                  v-if="!uploadForm[index].url_upload_1"
                                  class="icon-upload"
                                  src="@/assets/images/25th/icon-cloud.png"
                                  alt="上傳"
                                />
                                <p v-if="!uploadForm[index].url_upload_1">
                                  {{ $t("25th.upload.photo.label") }}
                                </p>
                                <img
                                  v-if="uploadForm[index].url_upload_1"
                                  :src="uploadForm[index].url_upload_1"
                                  class=""
                                />
                              </label>

                              <!-- 預覽與刪除 -->
                              <div class="preview" v-if="previewUrls[index].pd">
                                <img
                                  :src="previewUrls[index].pd"
                                  alt="預覽圖片"
                                />
                                <div
                                  class="upload-del"
                                  @click="clearImage(categoryName, 'pd')"
                                >
                                  <img
                                    src="@/assets/images/25th/icon-del.png"
                                    alt="刪除"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <!-- 場域照 -->
                          <div class="upload-style upload-photo">
                            <p class="title">
                              {{
                                $t("quality.activity.upload.photo.place.title")
                              }}
                              <span class="sub-title">{{
                                $t("quality.activity.upload.photo.place.des")
                              }}</span>
                            </p>
                            <!-- 照片上傳 -->
                            <div class="photo-upload">
                              <input
                                type="file"
                                :id="`upload-place-${index}`"
                                name="icon-upload.png"
                                accept=".jpg, .jpeg, .png"
                                @change="
                                  handleFileUpload(
                                    categoryName,
                                    'place',
                                    $event
                                  )
                                "
                                :disabled="
                                  uploadForm[index].status_1 == 'approved' ||
                                  uploadForm[index].status_2 == 'approved' ||
                                  uploadForm[index].status_3 == 'approved'
                                "
                              />
                              <label
                                :for="`upload-place-${index}`"
                                class="upload-file"
                              >
                                <img
                                  v-if="!uploadForm[index].url_upload_2"
                                  class="icon-upload"
                                  src="@/assets/images/25th/icon-cloud.png"
                                  alt="上傳"
                                />
                                <p v-if="!uploadForm[index].url_upload_2">
                                  {{ $t("25th.upload.photo.label") }}
                                </p>
                                <img
                                  v-if="uploadForm[index].url_upload_2"
                                  :src="uploadForm[index].url_upload_2"
                                  class=""
                                />
                              </label>

                              <!-- 預覽與刪除 -->
                              <div
                                class="preview"
                                v-if="previewUrls[index].place"
                              >
                                <img
                                  :src="previewUrls[index].place"
                                  alt="預覽圖片"
                                />
                                <div
                                  class="upload-del"
                                  @click="clearImage(categoryName, 'place')"
                                >
                                  <img
                                    src="@/assets/images/25th/icon-del.png"
                                    alt="刪除"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <!-- 加碼照 -->
                          <div class="upload-style upload-photo">
                            <p class="title">
                              {{
                                $t("quality.activity.upload.photo.bonus.title")
                              }}
                              <span class="sub-title">{{
                                $t("quality.activity.upload.photo.bonus.des")
                              }}</span>
                            </p>
                            <!-- 照片上傳 -->
                            <div class="photo-upload">
                              <input
                                type="file"
                                :id="`upload-bonus-${index}`"
                                name="icon-upload.png"
                                accept=".jpg, .jpeg, .png"
                                @change="
                                  handleFileUpload(
                                    categoryName,
                                    'bonus',
                                    $event
                                  )
                                "
                                :disabled="
                                  uploadForm[index].status_1 == 'approved' ||
                                  uploadForm[index].status_2 == 'approved' ||
                                  uploadForm[index].status_3 == 'approved'
                                "
                              />
                              <label
                                :for="`upload-bonus-${index}`"
                                class="upload-file"
                              >
                                <img
                                  v-if="!uploadForm[index].url_upload_3"
                                  class="icon-upload"
                                  src="@/assets/images/25th/icon-cloud.png"
                                  alt="上傳"
                                />
                                <p v-if="!uploadForm[index].url_upload_3">
                                  {{ $t("25th.upload.photo.label") }}
                                </p>
                                <img
                                  v-if="uploadForm[index].url_upload_3"
                                  :src="uploadForm[index].url_upload_3"
                                  class=""
                                />
                              </label>

                              <!-- 預覽與刪除 -->
                              <div
                                class="preview"
                                v-if="previewUrls[index].bonus"
                              >
                                <img
                                  :src="previewUrls[index].bonus"
                                  alt="預覽圖片"
                                />
                                <div
                                  class="upload-del"
                                  @click="clearImage(categoryName, 'bonus')"
                                >
                                  <img
                                    src="@/assets/images/25th/icon-del.png"
                                    alt="刪除"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="upload-remark">
                            {{ $t("quality.activity.upload.remark") }}
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- btn -->
                    <div
                      class="submit-btn"
                      :class="{
                        disabled:
                          uploadForm[index].is_uploaded &&
                          uploadForm[index].status_1 != 'approved' &&
                          uploadForm[index].status_2 != 'approved' &&
                          uploadForm[index].status_3 != 'approved',
                        success:
                          uploadForm[index].is_uploaded &&
                          (uploadForm[index].status_1 == 'approved' ||
                            uploadForm[index].status_2 == 'approved' ||
                            uploadForm[index].status_3 == 'approved'),
                      }"
                    >
                      <label class="checkbox-btn">
                        <input
                          type="checkbox"
                          id="extra-check"
                          name="extra-check"
                          class="extra-check"
                          v-model="uploadForm[index].is_foreign"
                        />
                        <span>{{
                          $t("quality.activity.upload.checkbox")
                        }}</span>
                      </label>
                      <!-- <button 
                        class="btn-style"
                        type="button"
                        @click="!uploadForm[index].is_uploaded ? submitEvent(index) : undefined"
                      > -->
                      <button
                        class="btn-style"
                        type="button"
                        @click="
                          uploadForm[index].status_1 != 'approved' &&
                          uploadForm[index].status_2 != 'approved' &&
                          uploadForm[index].status_3 != 'approved'
                            ? submitEvent(index)
                            : undefined
                        "
                      >
                        <!-- 按鈕3狀態 -->
                        <span v-if="!uploadForm[index].is_uploaded">{{
                          $t("quality.activity.upload.btn.submit")
                        }}</span>
                        <span
                          v-else-if="
                            uploadForm[index].is_uploaded &&
                            (uploadForm[index].status_1 == 'approved' ||
                              uploadForm[index].status_2 == 'approved' ||
                              uploadForm[index].status_3 == 'approved')
                          "
                          >{{ $t("quality.activity.upload.btn.success") }}</span
                        >
                        <span v-else="uploadForm[index].is_uploaded">{{
                          $t("quality.activity.upload.btn.ing")
                        }}</span>
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

        <!-- 投票區 -->
        <div id="vote" style="display: none">
          <h2 data-aos="fade-up">
            {{ $t("quality.activity.vote.h2") }}
            <p class="sub">
              {{ $t("quality.activity.vote.h2Sub.text1")
              }}<span class="text-dark-blue">{{
                $t("quality.activity.vote.h2Sub.text2")
              }}</span
              >{{ $t("quality.activity.vote.h2Sub.text3")
              }}<span class="text-dark-blue">{{
                $t("quality.activity.vote.h2Sub.text4")
              }}</span
              >{{ $t("quality.activity.vote.h2Sub.text5") }}
            </p>
          </h2>
          <div class="tabs-block">
            <div class="tabs-btn">
              <div
                class="tabs-item"
                :class="{ active: categoryVoteName === 'voteWork' }"
                data-item="voteWork"
                @click="tabsChange($event, 'vote')"
              >
                {{ $t("quality.activity.upload.category.item1.title") }}
              </div>
              <div
                class="tabs-item"
                :class="{ active: categoryVoteName === 'voteTravel' }"
                data-item="voteTravel"
                @click="tabsChange($event, 'vote')"
              >
                {{ $t("quality.activity.upload.category.item2.title") }}
              </div>
              <div
                class="tabs-item"
                :class="{ active: categoryVoteName === 'voteCity' }"
                data-item="voteCity"
                @click="tabsChange($event, 'vote')"
              >
                {{ $t("quality.activity.upload.category.item3.title") }}
              </div>
            </div>
            <div class="tabs-category">
              <template v-for="(item, index) in categoryVoteItem" :key="index">
                <div
                  class="category-style"
                  :class="
                    categoryVoteName === item.category
                      ? ['active', 'show', categoryVoteName]
                      : []
                  "
                >
                  <div class="tabs-content upload-block">
                    <div class="upload-title">
                      {{ item.title }}
                    </div>
                    <!-- 小圖片 -->
                    <div class="vote-images-style images1">
                      <img :src="getImagePath1(item.img1)" alt="" />
                    </div>
                    <div class="vote-images-style images2">
                      <img :src="getImagePath1(item.img2)" alt="" />
                    </div>
                    <!-- 內容 -->
                    <div class="content">
                      <div
                        class="item"
                        v-for="(item, idx) in getTopicVoteList(index)"
                        :key="idx"
                      >
                        <div class="employee">
                          <p class="name">{{ item.name }}</p>
                          <!-- 照片輪播 -->
                          <div>
                            <ThumbsImage :voteData="item" />
                          </div>
                          <p class="text">
                            {{ item.text }}
                          </p>
                        </div>
                        <!-- btn -->
                        <div v-if="item.is_voted" class="submit-btn success">
                          <button class="btn-style" type="button">
                            {{ $t("quality.activity.vote.button.voted") }}
                          </button>
                        </div>
                        <div v-else class="submit-btn">
                          <button
                            class="btn-style"
                            type="button"
                            @click.prevent="vote(index + 1, item.id)"
                          >
                            {{ $t("quality.activity.vote.button.notVote") }}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </template>
            </div>
          </div>
        </div>

        <!-- 加碼打卡 -->
        <div class="sign" style="display: none">
          <h2 data-aos="fade-up">
            {{ $t("quality.activity.signIn.h2") }}
            <!-- <p class="sub">{{ $t("quality.activity.signIn.h2Sub") }}</p> -->
          </h2>
          <div class="content" data-aos="fade-down" data-aos-duration="1000">
            <div class="sign-bonus">
              <p class="text">
                <span class="text-dark-blue">{{
                  $t("quality.activity.signIn.bonus.title")
                }}</span
                ><br />
                {{ $t("quality.activity.signIn.bonus.des") }}
              </p>
              <div class="sign-event">
                <!-- 6 月 -->
                <div
                  class="sign-item"
                  :class="[
                    isExpired(6)
                      ? 'disabled'
                      : canSignIn(6)
                      ? 'open'
                      : 'not-open',
                    signins.is_month_6_signed ? 'signed' : '',
                  ]"
                >
                  <div
                    :class="[
                      'sign-month',
                      { 'sign-month-en': locale === 'en' },
                    ]"
                  >
                    <p v-if="locale === 'zh'">
                      <span>6</span>月
                      <!-- {{ $t("quality.activity.signIn.bonus.month") }} -->
                    </p>
                    <p v-else><span>June</span></p>
                  </div>
                  <button
                    class="btn-style"
                    type="button"
                    @click="canSignIn(6) ? signIn(6) : undefined"
                  >
                    <template v-if="canSignIn(6)">
                      <span v-if="signins.is_month_6_signed">{{
                        $t("quality.activity.signIn.bonus.btn.status2")
                      }}</span>
                      <span v-else>{{
                        $t("quality.activity.signIn.bonus.btn.status3")
                      }}</span>
                    </template>
                    <template v-else-if="isExpired(6)">
                      <span v-if="signins.is_month_6_signed">{{
                        $t("quality.activity.signIn.bonus.btn.status2")
                      }}</span>
                      <span v-else>{{
                        $t("quality.activity.signIn.bonus.btn.status1")
                      }}</span>
                    </template>
                    <template v-else>
                      <span>{{
                        $t("quality.activity.signIn.bonus.btn.status4")
                      }}</span>
                    </template>
                  </button>
                </div>
                <!-- 7 月 -->
                <div
                  class="sign-item"
                  :class="[
                    isExpired(7)
                      ? 'disabled'
                      : canSignIn(7)
                      ? 'open'
                      : 'not-open',
                    signins.is_month_7_signed ? 'signed' : '',
                  ]"
                >
                  <div
                    :class="[
                      'sign-month',
                      { 'sign-month-en': locale === 'en' },
                    ]"
                  >
                    <p v-if="locale === 'zh'"><span>7</span>月</p>
                    <p v-else><span>July</span></p>
                  </div>
                  <button
                    class="btn-style"
                    type="button"
                    @click="canSignIn(7) ? signIn(7) : undefined"
                  >
                    <template v-if="canSignIn(7)">
                      <span v-if="signins.is_month_7_signed">{{
                        $t("quality.activity.signIn.bonus.btn.status2")
                      }}</span>
                      <span v-else>{{
                        $t("quality.activity.signIn.bonus.btn.status3")
                      }}</span>
                    </template>
                    <template v-else-if="isExpired(7)">
                      <span v-if="signins.is_month_7_signed">{{
                        $t("quality.activity.signIn.bonus.btn.status2")
                      }}</span>
                      <span v-else>{{
                        $t("quality.activity.signIn.bonus.btn.status1")
                      }}</span>
                    </template>
                    <template v-else>
                      <span>{{
                        $t("quality.activity.signIn.bonus.btn.status4")
                      }}</span>
                    </template>
                  </button>
                </div>
                <!-- 8 月 -->
                <div
                  class="sign-item"
                  :class="[
                    isExpired(8)
                      ? 'disabled'
                      : canSignIn(8)
                      ? 'open'
                      : 'not-open',
                    signins.is_month_8_signed ? 'signed' : '',
                  ]"
                >
                  <div
                    :class="[
                      'sign-month',
                      { 'sign-month-en': locale === 'en' },
                    ]"
                  >
                    <p v-if="locale === 'zh'"><span>8</span>月</p>
                    <p v-else><span>August</span></p>
                  </div>
                  <button
                    class="btn-style"
                    type="button"
                    @click="canSignIn(8) ? signIn(8) : undefined"
                  >
                    <template v-if="canSignIn(8)">
                      <span v-if="signins.is_month_8_signed">{{
                        $t("quality.activity.signIn.bonus.btn.status2")
                      }}</span>
                      <span v-else>{{
                        $t("quality.activity.signIn.bonus.btn.status3")
                      }}</span>
                    </template>
                    <template v-else-if="isExpired(8)">
                      <span v-if="signins.is_month_8_signed">{{
                        $t("quality.activity.signIn.bonus.btn.status2")
                      }}</span>
                      <span v-else>{{
                        $t("quality.activity.signIn.bonus.btn.status1")
                      }}</span>
                    </template>
                    <template v-else>
                      <span>{{
                        $t("quality.activity.signIn.bonus.btn.status4")
                      }}</span>
                    </template>
                  </button>
                </div>
              </div>
              <p class="remark">{{ $t("quality.activity.signIn.remark") }}</p>
            </div>

            <hr />

            <!-- 貼文 -->
            <div class="linkedIn">
              <p class="text">
                <span class="text-dark-blue">
                  {{ $t("quality.activity.linkedIn.title1") }}Together@25
                  {{ $t("quality.activity.linkedIn.title2") }}
                </span>
              </p>
              <a
                href="https://www.linkedin.com/posts/vivotekglobal_vivotek25-maketomorroreasier-teamwork-activity-7340196435201531905-J7LK?utm_source=share&utm_medium=member_desktop&rcm=ACoAADLwLkABw4Kux3W5T4tCyFWl6Rs7w08FMtY"
                target="_blank"
                class="linkedIn-url"
              >
                <img src="@/assets/images/quality/img-linkedin3.png" alt="" />
              </a>
              <p class="text">
                {{ $t("quality.activity.linkedIn.des") }}
              </p>
            </div>
          </div>
        </div>
        <div class="ended">
          <h2>
            <p class="sub">{{ $t("quality.activity.ended.des") }}</p>
          </h2>
        </div>
      </div>
    </section>
    <!-- Notion -->
    <section id="notion">
      <div class="container w-1280">
        <div class="notion-content">
          <p>{{ $t("quality.notion.title") }}</p>
          <ul>
            <li v-for="(item, index) in 5" :key="index">
              {{ $t(`quality.notion.list${index + 1}`) }}
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

// import { Swiper, SwiperSlide } from "swiper/vue";
// import { Navigation, Thumbs, FreeMode } from "swiper/modules";

// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/thumbs";
// import "swiper/css/free-mode";

const { t, locale, setLocale } = useI18n();
const email = ref("");
const employeeId = ref("");
const errorMsg = ref(false);
const authStore = useAuthStore();
const router = useRouter();

const file = ref(null); // 存儲上傳的文件

const categoryName = ref("work");
const categoryVoteName = ref("voteWork");
let categoryIndex = ref(0);

/* 動態圖片路徑 */
// Step
const glob1 = import.meta.glob("@/assets/images/quality/*", { eager: true });
// console.log(glob);
function getImagePath1(imageName) {
  const path = `/assets/images/quality/${imageName}`;
  return glob1[path]?.default || "";
}

// event
const glob2 = import.meta.glob("@/assets/images/quality/announcement/**/*", {
  eager: true,
});
function getImagePath2(imageName) {
  const path = `/assets/images/quality/announcement/${imageName}`;
  return glob2[path]?.default || "";
}

const announcementInfo = reactive([
  {
    category: "voteWork",
    ranking: [
      {
        id: "1",
        name: "Maggie H.",
        img1: "topic1/1-1.jpg",
        img2: "topic1/1-2.jpg",
        img3: "topic1/1-3.jpg",
        text: "在公司很放心，到處都有裝攝影機，同事若有東西忘了，可透過攝影機找回失誤。",
      },
      {
        id: "2",
        name: "Xin C.",
        img1: "topic1/2-1.jpg",
        img2: "topic1/2-2.jpg",
        img3: "topic1/2-3.jpg",
        text: "每天在公司5樓上班 口渴總是要去茶水間 這台camera就在茶水間門口的天花板上~ 時時刻刻的關心著各位同事!!",
      },
      {
        id: "3",
        name: "Only L.",
        img1: "topic1/3-1.jpg",
        img2: "topic1/3-2.jpg",
        img3: "topic1/3-3.jpg",
        text: "VIVOTEK 攝影機就是我的日常，桌面上總是充滿著VIVOTEK的各式攝影機，各自有獨特的功能無可替代，VIVOTEK MAKES TOMORROW EASIER, TODAY!",
      },
      {
        id: "4",
        name: "Polly J.",
        img1: "topic1/4.jpg",
      },
      {
        id: "5",
        name: "Dora L.",
        img1: "topic1/5.jpg",
      },
      {
        id: "6",
        name: "Fred H.",
        img1: "topic1/6.jpg",
      },
      {
        id: "7",
        name: "Matthew U.",
        img1: "topic1/7.jpg",
      },
      {
        id: "8",
        name: "Sherry W.",
        img1: "topic1/8.jpg",
      },
      {
        id: "9",
        name: "Emma H.",
        img1: "topic1/9.jpg",
      },
      {
        id: "10",
        name: "Sabrina C.",
        img1: "topic1/10.jpg",
      },
      {
        id: "11",
        name: "291XXX41 Chris L.",
        pd: t("quality.awards.announcement.submission") + "｜ US$50"
      },
      {
        id: "12",
        name: "293XXX24 Takeda K.",
        pd: t("quality.awards.announcement.voting") + "｜" + t("quality.awards.announcement.gift"),
      },
    ],
  },
  {
    category: "voteTravel",
    ranking: [
      {
        id: "1",
        name: "Xin C.",
        img1: "topic2/1-1.jpg",
        img2: "topic2/1-2.jpg",
        img3: "topic2/1-3.jpg",
        text: "趁著 6 月黃金周 去到了遙遠的南半球紐西蘭皇后鎮 但即使在這麼遙遠且酷寒的地方 也有著 VIVOTEK 的 camera 讓我們看到更美的風景!!",
      },
      {
        id: "2",
        name: "Sherry W.",
        img1: "topic2/2-1.jpg",
        img2: "topic2/2-2.jpg",
        img3: "topic2/2-3.jpg",
        text: "Great ! 和遠洋飄過來的好朋友一起搭捷捷運101旅行趣 捷運車站延路佈滿 VIVOTEK Cameras, 可以有效的監控,即時辨識可疑事件! 守護著所有旅行中的好朋友,都能平安喜樂〪",
      },
      {
        id: "3",
        name: "Diro",
        img1: "topic2/3-1.jpg",
        img2: "topic2/3-2.jpg",
        img3: "topic2/3-3.jpg",
        text: "小樽天狗山是北海道三大夜景之一，而在這山頂觀景台的頂樓，更是安裝了 VIVOTEK 的 Speed Dome，並在 Youtube 二十四小時全天候轉播天狗山俯視整個小樽地區的風景/夜景，讓全世界都能透過 VIVOTEK Camera 觀賞到這美麗的景色",
      },
      {
        id: "4",
        name: "Xin H.",
        img1: "topic2/4.jpg",
      },
      {
        id: "5",
        name: "Jim Y.",
        img1: "topic2/5.jpg",
      },
      {
        id: "6",
        name: "Sabrina C.",
        img1: "topic2/6.jpg",
      },
      {
        id: "7",
        name: "Only L.",
        img1: "topic2/7.jpg",
      },
      {
        id: "8",
        name: "Dora L.",
        img1: "topic2/8.jpg",
      },
      {
        id: "9",
        name: "Angel H.",
        img1: "topic2/9.jpg",
      },
      {
        id: "10",
        name: "Renee C.",
        img1: "topic2/10.jpg",
      },
      {
        id: "11",
        name: "291XXX28 Allen L.",
        pd: t("quality.awards.announcement.submission") + "｜ US$50"
      },
      {
        id: "12",
        name: "291XXX66 Wayne L.",
        pd: t("quality.awards.announcement.voting") + "｜" + t("quality.awards.announcement.gift"),
      },
    ],
  },
  {
    category: "voteCity",
    ranking: [
      {
        id: "1",
        name: "Xin C.",
        img1: "topic3/1-1.jpg",
        img2: "topic3/1-2.jpg",
        img3: "topic3/1-3.jpg",
        text: "這裡是澳洲的雪梨機場 在這麼繁忙的現代化大都市機場 也能看到VIVOTEK camera的身影 幫助繁忙的旅客們 使旅途中更為安全與安心!!",
      },
      {
        id: "2",
        name: "Sherry W.",
        img1: "topic3/2-1.jpg",
        img2: "topic3/2-2.jpg",
        img3: "topic3/2-3.jpg",
        text: "您平安了,我們就安心-海洋科技博物館(綠建築) VIVOTEK 時時刻刻守護著大家的安危 潮境智能海洋館-台達孕生珊瑚復育計劃",
      },
      {
        id: "3",
        name: "Amy C. ",
        img1: "topic3/3-1.jpg",
        img2: "topic3/3-2.jpg",
        img3: "topic3/3-3.jpg",
        text: "騎乘機車在板橋忠孝路與重慶路交叉路口仰望天空，喜見VIVOTEK CAMERA 守護交通秩序，智慧監控有效率",
      },
      {
        id: "4",
        name: "Fred H.",
        img1: "topic3/4.jpg",
      },
      {
        id: "5",
        name: "Only L.",
        img1: "topic3/5.jpg",
      },
      {
        id: "6",
        name: "Jones L.",
        img1: "topic3/6.jpg",
      },
      {
        id: "7",
        name: "Matthew U.",
        img1: "topic3/7.jpg",
      },
      {
        id: "8",
        name: "Renee C.",
        img1: "topic3/8.jpg",
      },
      {
        id: "9",
        name: "Sabrina C.",
        img1: "topic3/9.jpg",
      },
      {
        id: "10",
        name: "Queenie T.",
        img1: "topic3/10.jpg",
      },
      {
        id: "11",
        name: "291XXX76 Arnold C.",
        pd: t("quality.awards.announcement.submission") + "｜ US$50"
      },
      {
        id: "12",
        name: "291XXX01 Spark H.",
        pd: t("quality.awards.announcement.voting") + "｜" + t("quality.awards.announcement.gift"),
      },
    ],
  },
]);

const stepItem = reactive([
  {
    step: "Step 1",
    img: "icon-step1.svg",
    title: t("quality.step.item1.title"),
    des: t("quality.step.item1.des"),
    des2: "",
  },
  {
    step: "Step 2",
    img: "icon-step2.svg",
    title: t("quality.step.item2.title"),
    des: t("quality.step.item2.des"),
    des2: t("quality.step.item2.des2"),
  },
  {
    step: "Step 3",
    img: "icon-step3.svg",
    title: t("quality.step.item3.title"),
    des: t("quality.step.item3.des"),
    des2: "",
  },
]);

const topicItem = reactive([
  {
    step: t("quality.activity.topic.item1.step"),
    img: "img-topic1.svg",
    title: t("quality.activity.topic.item1.title"),
    des: t("quality.activity.topic.item1.des"),
  },
  {
    step: t("quality.activity.topic.item2.step"),
    img: "img-topic2.svg",
    title: t("quality.activity.topic.item2.title"),
    des: t("quality.activity.topic.item2.des"),
  },
  {
    step: t("quality.activity.topic.item3.step"),
    img: "img-topic3.svg",
    title: t("quality.activity.topic.item3.title"),
    des: t("quality.activity.topic.item3.des"),
  },
]);
const voteInfoTopic_1 = ref([]);
const voteInfoTopic_2 = ref([]);
const voteInfoTopic_3 = ref([]);

// Swiper
// const thumbsSwiper = ref(null);
// const setThumbsSwiper = (swiper) => {
//   thumbsSwiper.value = swiper;
// };

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
    category: "work",
    title: t("quality.activity.upload.category.item1.title"),
    img: "img-demo1.svg",
    imgEn: "img-demo1_en.svg",
  },
  {
    category: "travel",
    title: t("quality.activity.upload.category.item2.title"),
    img: "img-demo2.svg",
    imgEn: "img-demo2_en.svg",
  },
  {
    category: "city",
    title: t("quality.activity.upload.category.item3.title"),
    img: "img-demo3.svg",
    imgEn: "img-demo3_en.svg",
  },
]);

const categoryVoteItem = reactive([
  {
    category: "voteWork",
    title: t("quality.activity.vote.category.item1.title"),
    img1: "img-vote1-1.svg",
    img2: "img-vote1-2.svg",
  },
  {
    category: "voteTravel",
    title: t("quality.activity.vote.category.item2.title"),
    img1: "img-vote2-1.svg",
    img2: "img-vote2-2.svg",
  },
  {
    category: "voteCity",
    title: t("quality.activity.vote.category.item3.title"),
    img1: "img-vote3-1.svg",
    img2: "img-vote3-2.svg",
  },
]);

const signins = reactive({
  is_month_6_signed: false,
  is_month_7_signed: false,
  is_month_8_signed: false,
});

const uploadForm = reactive([
  {
    description: "",
    status_1: "pending",
    status_2: "pending",
    status_3: "pending",
    is_uploaded: false,
    is_foreign: false,
    file_upload_1: null,
    file_upload_2: null,
    file_upload_3: null,
    url_upload_1: null,
    url_upload_2: null,
    url_upload_3: null,
  },
  {
    description: "",
    status_1: "pending",
    status_2: "pending",
    status_3: "pending",
    is_uploaded: false,
    is_foreign: false,
    file_upload_1: null,
    file_upload_2: null,
    file_upload_3: null,
    url_upload_1: null,
    url_upload_2: null,
    url_upload_3: null,
  },
  {
    description: "",
    status_1: "pending",
    status_2: "pending",
    status_3: "pending",
    is_uploaded: false,
    is_foreign: false,
    file_upload_1: null,
    file_upload_2: null,
    file_upload_3: null,
    url_upload_1: null,
    url_upload_2: null,
    url_upload_3: null,
  },
]);

let uploadPhotoData = reactive([
  {
    basic_pd: null,
    basic_place: null,
    bonus: null,
  },
  {
    basic_pd: null,
    basic_place: null,
    bonus: null,
  },
  {
    basic_pd: null,
    basic_place: null,
    bonus: null,
  },
]);

const previewUrls = reactive([
  {
    pd: null,
    place: null,
    bonus: null,
  },
  {
    pd: null,
    place: null,
    bonus: null,
  },
  {
    pd: null,
    place: null,
    bonus: null,
  },
]);

const handleFileUpload = (category, type, e) => {
  const file = e.target.files[0];
  if (!file) return;

  if (category === "work") {
    categoryIndex = 0;
  } else if (category === "travel") {
    categoryIndex = 1;
  } else {
    categoryIndex = 2;
  }

  const url = URL.createObjectURL(file);
  previewUrls[categoryIndex][type] = url;

  if (type === "pd") {
    uploadPhotoData[categoryIndex].basic_pd = file;
    uploadForm[categoryIndex].file_upload_1 = file;
  } else if (type === "place") {
    uploadPhotoData[categoryIndex].basic_place = file;
    uploadForm[categoryIndex].file_upload_2 = file;
  } else if (type === "bonus") {
    uploadPhotoData[categoryIndex].bonus = file;
    uploadForm[categoryIndex].file_upload_3 = file;
  }
};

// 清除圖片
const clearImage = (category, type) => {
  if (category === "work") {
    categoryIndex = 0;
  } else if (category === "travel") {
    categoryIndex = 1;
  } else {
    categoryIndex = 2;
  }
  previewUrls[categoryIndex][type] = null;

  if (type === "pd") {
    uploadPhotoData[categoryIndex].basic_pd = null;
    uploadForm[categoryIndex].file_upload_1 = null;
    document.getElementById(`upload-pd-${categoryIndex}`).value = "";
  } else if (type === "place") {
    uploadPhotoData[categoryIndex].basic_place = null;
    uploadForm[categoryIndex].file_upload_2 = null;
    document.getElementById(`upload-place-${categoryIndex}`).value = "";
  } else if (type === "bonus") {
    uploadPhotoData[categoryIndex].bonus = null;
    uploadForm[categoryIndex].file_upload_3 = null;
    document.getElementById(`upload-bonus-${categoryIndex}`).value = "";
  }
};

const refreshSignin = async () => {
  const res = await $fetch(`/api/activities/ultimate-explorer/signins`);

  if (res.success) {
    signins.is_month_6_signed = res.is_month_6_signed;
    signins.is_month_7_signed = res.is_month_7_signed;
    signins.is_month_8_signed = res.is_month_8_signed;
  }
};

const readUploadedContent = async () => {
  const res = await $fetch(`/api/activities/ultimate-explorer`);
  // console.log(res)

  if (res.success) {
    uploadForm[0].description = res.topic_1.description || "";
    uploadForm[0].is_uploaded = res.topic_1.is_uploaded;
    uploadForm[0].is_foreign = res.topic_1.is_foreign;
    uploadForm[0].url_upload_1 = res.topic_1.url_upload_1;
    uploadForm[0].url_upload_2 = res.topic_1.url_upload_2;
    uploadForm[0].url_upload_3 = res.topic_1.url_upload_3;
    // TODO: 各種審核狀態status_1:產品、status_2:場域、status_3:海外加碼照
    uploadForm[0].status_1 = res.topic_1.status_1;
    uploadForm[0].status_2 = res.topic_1.status_2;
    uploadForm[0].status_3 = res.topic_1.status_3;

    uploadForm[1].description = res.topic_2.description || "";
    uploadForm[1].is_uploaded = res.topic_2.is_uploaded;
    uploadForm[1].is_foreign = res.topic_2.is_foreign;
    uploadForm[1].url_upload_1 = res.topic_2.url_upload_1;
    uploadForm[1].url_upload_2 = res.topic_2.url_upload_2;
    uploadForm[1].url_upload_3 = res.topic_2.url_upload_3;
    // TODO: 各種審核狀態status_1:產品、status_2:場域、status_3:海外加碼照
    uploadForm[1].status_1 = res.topic_2.status_1;
    uploadForm[1].status_2 = res.topic_2.status_2;
    uploadForm[1].status_3 = res.topic_2.status_3;

    uploadForm[2].description = res.topic_3.description || "";
    uploadForm[2].is_uploaded = res.topic_3.is_uploaded;
    uploadForm[2].is_foreign = res.topic_3.is_foreign;
    uploadForm[2].url_upload_1 = res.topic_3.url_upload_1;
    uploadForm[2].url_upload_2 = res.topic_3.url_upload_2;
    uploadForm[2].url_upload_3 = res.topic_3.url_upload_3;
    // TODO: 各種審核狀態status_1:產品、status_2:場域、status_3:海外加碼照
    uploadForm[2].status_1 = res.topic_3.status_1;
    uploadForm[2].status_2 = res.topic_3.status_2;
    uploadForm[2].status_3 = res.topic_3.status_3;
  }
};

const submitEvent = async (index) => {
  if (!uploadForm[index].is_uploaded && !uploadPhotoData[index].basic_pd) {
    alert(t("quality.activity.upload.alert.pd"));
    return;
  } else if (
    !uploadForm[index].is_uploaded &&
    !uploadPhotoData[index].basic_place
  ) {
    alert(t("quality.activity.upload.alert.place"));
    return;
  } else if (!uploadForm[index].description) {
    alert(t("quality.activity.upload.alert.text"));
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
    `/api/activities/ultimate-explorer/topic/${index + 1}`,
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

const signIn = async (month) => {
  const res = await $fetch(`/api/activities/ultimate-explorer/signin`, {
    method: "POST",
    body: { month },
  });

  if (res.success) {
    alert(t("quality.activity.signIn.alertSuccess"));
    refreshSignin();
  } else {
    alert(t("quality.activity.signIn.remark"));
    console.log(res.message);
  }
};

const vote = async (topic, id) => {
  const res = await $fetch(`/api/activities/ultimate-explorer/vote`, {
    method: "POST",
    body: {
      participant_id: id,
      topic,
    },
  });

  if (res.success) {
    refreshVoteLists();
    alert(t("quality.activity.vote.alert.success"));
  } else {
    alert(t("quality.activity.vote.alert.fail"));
  }
};

const getTopicVoteList = (index) => {
  if (index === 0) {
    return voteInfoTopic_1.value;
  } else if (index === 1) {
    return voteInfoTopic_2.value;
  } else if (index === 2) {
    return voteInfoTopic_3.value;
  } else {
    return [];
  }
};

const refreshVoteLists = () => {
  $fetch(`/api/activities/ultimate-explorer/topic-list/1`).then(
    (resTopicList_1) => {
      if (resTopicList_1.success) {
        voteInfoTopic_1.value = resTopicList_1.collection.map((item) => ({
          id: item.id,
          name: item.name,
          img1: item.url_upload_1,
          img2: item.url_upload_2,
          img3: item.url_upload_3,
          text: item.description || "",
          is_voted: item.is_voted || false, // 是否已投票
        }));
      }
    }
  );

  $fetch(`/api/activities/ultimate-explorer/topic-list/2`).then(
    (resTopicList_2) => {
      if (resTopicList_2.success) {
        voteInfoTopic_2.value = resTopicList_2.collection.map((item) => ({
          id: item.id,
          name: item.name,
          img1: item.url_upload_1,
          img2: item.url_upload_2,
          img3: item.url_upload_3,
          text: item.description || "",
          is_voted: item.is_voted || false, // 是否已投票
        }));
      }
    }
  );

  $fetch(`/api/activities/ultimate-explorer/topic-list/3`).then(
    (resTopicList_3) => {
      if (resTopicList_3.success) {
        voteInfoTopic_3.value = resTopicList_3.collection.map((item) => ({
          id: item.id,
          name: item.name,
          img1: item.url_upload_1,
          img2: item.url_upload_2,
          img3: item.url_upload_3,
          text: item.description || "",
          is_voted: item.is_voted || false, // 是否已投票
        }));
      }
    }
  );
};

refreshVoteLists();
onMounted(() => {
  AOS.init({
    anchorPlacement: "top-bottom",
  });

  readUploadedContent();
  refreshSignin();
});

definePageMeta({
  middleware: "auth",
});

// 判斷是否為活動時間
const canSignIn = (month) => {
  const now = new Date();

  // 轉換為台灣時間 (+8 時區)
  const utc8 = new Date(
    now.toLocaleString("en-US", { timeZone: "Asia/Taipei" })
  );

  const date = utc8.getDate();
  const hour = utc8.getHours();
  const currentMonth = utc8.getMonth() + 1;

  const isTargetDate = month == currentMonth && date === 25;
  const isTargetTime = hour >= 10 && hour < 22;

  return isTargetDate && isTargetTime;
};

const isExpired = (month) => {
  const now = new Date();
  const utc8 = new Date(
    now.toLocaleString("en-US", { timeZone: "Asia/Taipei" })
  );

  const targetDate = new Date(utc8.getFullYear(), month - 1, 25, 22, 0, 0); // 月份從0開始計算
  return utc8 > targetDate;
};
</script>
<style lang="scss">
$th25ImgUrl: "@/assets/images/25th/";
$qualityImgUrl: "@/assets/images/quality/";

#quality {
  .kv {
    position: relative;
    width: 100vw;
    height: vwXL(850);
    background: url($qualityImgUrl + "bg-kv.png") no-repeat top/cover #c5faff;
    overflow: hidden;

    @include mobile {
      width: 100%;
      height: vw(600);
      background: url($qualityImgUrl + "bg-kv_m.png") no-repeat top/cover
        #c5faff;
    }

    .img {
      &-people {
        position: relative;
        top: vwXL(89);
        left: vwXL(298);
        width: vwXL(1360);
      }

      &-logo {
        position: absolute;
        top: vwXL(55);
        left: 50%;
        transform: translateX(-50%);
        width: vwXL(390);
      }
    }
  }

  #intro {
    background: url($qualityImgUrl + "bg-intro.png") no-repeat center 83% /
      cover #daf1f3;

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

    .step {
      .step-content {
        .step-item {
          .step-num {
            background: $primaryColorAquaBlue;
          }

          .text {
            text-align: center;
          }
        }

        .step-arrow {
          background-color: $primaryColorAquaBlue;
        }
      }
    }
  }

  #description {
    background: url($qualityImgUrl + "bg-description.png") no-repeat
      bottom/cover #d8f0ff;

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
            .num {
              display: block;
              background: $primaryColorDarkBlue;
              color: #fff;
              border-radius: 1000px;
              width: 28px;
              height: 28px;
              font-size: 16px;
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
    }
  }
  swiper-slide {
    width: 100%;
  }
  #activity {
    background: url($qualityImgUrl + "bg-activity.png") no-repeat center -67px /
      cover #d8f0ff;

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
    }

    .topic {
      .step-content .step-item:not(:last-child)::after {
        display: none;
      }

      .step-num {
        font-size: 30px;
        padding: 12px 0;
        background: $primaryColorDarkBlue;

        @include mobile {
          font-size: vw(30);
          padding: vw(12) 0;
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
            max-width: 559px;
            min-width: 200px;

            @include mobile {
              max-width: vw(470);
            }

            p {
              font-size: 20px;
              font-weight: 600;

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
          // 審核通過
          &.success {
            .btn-style {
              background: $primaryColorAquaBlue;
              &::after {
                background: url($qualityImgUrl + "icon-check-circle.svg")
                  no-repeat bottom / cover;
              }
            }
          }
        }
        .upload-remark {
          font-size: 12px;
          line-height: 20px;
          @include flex-style(flex-end, flex-end);
          flex-direction: column;
          white-space: pre-line;
          text-align: right;

          @include mobile {
            font-size: vw(14);
            line-height: vw(20);
          }
        }
      }
    }
    #vote {
      width: 100%;
      position: relative;
      .content {
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: vwXL(24);
        height: vwXL(880);
        overflow-y: auto;
        padding-bottom: vwXL(50);
        scrollbar-width: thin;
        scrollbar-color: $secondaryColorGray #ffffff;

        @include mobile {
          grid-template-columns: 1fr 1fr;
          gap: vw(16);
          height: vw(880);
          overflow-y: auto;
          padding-bottom: vw(50);
        }
        .item {
          border: 1px solid $secondaryColorGray;
          padding: vwXL(24);
          border-radius: vwXL(24);
          // width: vwXL(328);
          width: 100%;
          @include flex-center;
          flex-direction: column;
          gap: vwXL(12);

          @include mobile {
            padding: vw(24) vw(12);
            border-radius: vw(24);
            gap: vw(12);
          }

          .employee {
            // width: vwXL(328);
            width: 100%;
            @include flex-center;
            flex-direction: column;
            gap: vwXL(16);

            @include mobile {
              gap: vw(16);
            }

            .name {
              font-size: 24px;
              text-align: center;
              font-weight: 700;
              @include mobile {
                font-size: vw(24);
              }
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
                width: vw(280);
                margin-bottom: vw(16);
              }
            }
            .thumbsSwiper {
              width: vwXL(328);
              height: vwXL(104);
              @include flex-center;
              @include mobile {
                width: vw(280);
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
      .vote-images-style {
        position: absolute;
        z-index: 2;
        width: vwXL(260);
        @include mobile {
          width: vw(200);
        }
        &.images1 {
          right: -5%;
          top: -6%;
          @include mobile {
            right: -3%;
            top: -4%;
          }
        }
        &.images2 {
          left: -5%;
          bottom: -6%;
          @include mobile {
            left: -4%;
            bottom: -5%;
          }
        }
      }
    }

    .sign {
      width: 100%;
      overflow: hidden;

      .content {
        background: url($qualityImgUrl + "bg-sign.png") no-repeat left
          bottom/cover;
        padding: 153px 40px;
        @include flex-center;
        flex-direction: column;
        gap: 50px;
        position: relative;
        border-radius: 16px;

        @include mobile {
          padding: vw(130) vw(25);
          gap: vw(50);
          border-radius: vw(16);
        }

        .text {
          font-size: 24px;
          line-height: 35px;
          text-align: center;
          font-weight: 500;

          @include mobile {
            font-size: vw(24);
            line-height: vw(35);
          }
        }

        .sign-bonus {
          width: 100%;
          @include flex-center;
          flex-direction: column;
          gap: 30px;

          @include mobile {
            gap: vw(30);
          }

          .sign-event {
            @include flex-style(center, center);
            gap: 46px;
            width: 100%;

            @include mobile {
              gap: vw(46);
            }

            .sign-item {
              @include flex-center;
              flex-direction: column;
              gap: 16px;
              max-width: 220px;
              width: 100%;

              @include mobile {
                gap: vw(16);
              }

              .sign-month {
                max-width: 220px;
                width: 100%;
                height: 105px;

                @include mobile {
                  height: vw(105);
                }

                p {
                  position: relative;
                  top: 50%;
                  transform: translateY(-32%);
                  text-align: center;
                  font-weight: 500;

                  @include mobile {
                    transform: translateY(-48%);
                  }

                  span {
                    font-size: 48px;
                    line-height: 56px;
                    font-weight: 700;
                    font-style: italic;

                    @include mobile {
                      font-size: vw(40);
                      line-height: vw(52);
                    }
                  }
                }
                &-en {
                  p {
                    span {
                      font-size: 40px;
                      line-height: 56px;

                      @include mobile {
                        font-size: vw(40);
                        line-height: vw(52);
                      }
                    }
                  }
                }
              }

              .btn-style {
                padding: 10px 20px 8px 20px;
                font-size: 20px;
                line-height: 28px;

                @include mobile {
                  padding: vw(10) vw(20) vw(8) vw(20);
                  font-size: vw(20);
                  line-height: vw(28);
                }
              }

              //已打卡
              &.signed {
                .sign-month {
                  position: relative;

                  &::before {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    z-index: 1;
                    content: "";
                    width: 60px;
                    height: 60px;
                    background: url($qualityImgUrl + "icon-sign-check.svg")
                      no-repeat top/cover;

                    @include mobile {
                      width: vw(60);
                      height: vw(60);
                    }
                  }

                  &::after {
                    position: absolute;
                    top: 0;
                    content: "";
                    max-width: 220px;
                    width: 100%;
                    height: 105px;
                    mask-image: url($qualityImgUrl + "img-sign-disabled.png");
                    mask-repeat: no-repeat;
                    mask-position: center;
                    mask-size: contain;
                    opacity: 0.7;

                    @include mobile {
                      height: vw(105);
                    }
                  }
                }
              }

              // 進行中
              &.open {
                .sign-month {
                  background: url($qualityImgUrl + "img-sign-open.png")
                    no-repeat center/contain;

                  &::after {
                    background-color: $primaryColorPurple;
                  }
                }

                .btn-style {
                  background: $primaryColorPurple;
                }
              }

              // 未開放
              &.not-open {
                .sign-month {
                  background: url($qualityImgUrl + "img-sign-notopen.png")
                    no-repeat top/contain;
                }

                .btn-style {
                  cursor: default;
                  background: #e0d6fc;
                }
              }

              // 已過期
              &.disabled {
                .sign-month {
                  background: url($qualityImgUrl + "img-sign-disabled.png")
                    no-repeat top/contain;

                  &::after {
                    background-color: $secondaryColorDarkGray;
                  }
                }

                .btn-style {
                  cursor: default;
                  background: $secondaryColorDarkGray;
                }
              }
            }
          }

          .remark {
            font-size: 20px;
            line-height: 28px;
            text-align: center;
            font-weight: 500;
            color: $secondaryColorDarkGray;

            @include mobile {
              font-size: vw(20);
              line-height: vw(28);
            }
          }
        }

        hr {
          max-width: 800px;
          width: 100%;
          // border: 1px solid $secondaryColorDarkGray;
        }

        .linkedIn {
          @include flex-center;
          flex-direction: column;
          gap: 30px;

          @include mobile {
            gap: vw(30);
          }

          .linkedIn-url {
            max-width: 448px;
            margin-left: 20px;

            @include mobile {
              margin-left: vw(20);
            }

            &:hover {
              transform: scale(0.98);
            }
          }
        }
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
