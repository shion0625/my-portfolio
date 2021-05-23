<template>
  <div id="about-content">
    <div id="profile">
      <h2>PROFILE</h2>
      <div id="profile-content"></div>
    </div>
    <h2>SKILL</h2>
    <div class="skill-contents">
      <div
        class="skill-content"
        v-for="skillTitle in skillTitles"
        :key="skillTitle"
      >
        <h3>{{ skillTitle }}</h3>
        <table>
          <tr>
            <th>言語</th>
            <th>経験年数</th>
            <th>アイコン</th>
          </tr>
          <tr v-for="num in number" :key="num">
            <td v-for="info in imfomations" :key="info">
              {{ info }}
            </td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      skillTitles: [
        "フロントエンド",
        "バックエンド",
        "データベース",
        "インフラ・サーバ",
        "その他",
        "保有資格",
      ],
      imfomations: ["html", "2", "icon"],
      number: 3,
    };
  },
};
</script>

<style lang="scss" scoped>
$breakpoints: (
  "sm": "screen and (max-width: 480px)",
  "md": "screen and (max-width: 750px)",
  "lg": "screen and (max-width: 896px)",
  "xl": "screen and (max-width: 1024px)",
) !default;
@mixin mq($breakpoint: xl) {
  @media #{map-get($breakpoints, $breakpoint)} {
    @content;
  }
}

#about-content {
  background-color: #f3f3f3;
  h2 {
    font-size: 4rem;
    text-align: center;
  }
  .skill-contents {
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    justify-content: space-around;
    @include mq(md) {
      flex-direction: column;
      justify-content: center;
    }
    .skill-content {
      h3 {
        font-size: 3rem;
      }
      font-size: 2.6rem;
      width: 40%;
      background-color: #ffffff;
      margin: 5%;
      th {
        padding-right: 20px;
      }
      @include mq() {
        font-size: 2.3rem;
      }
      @include mq(md) {
        margin: 0;
        width: 90%;
        margin: 5% auto;
      }
      @include mq(sm) {
        font-size: 1.7rem;
      }
      table {
        margin: auto;
      }
    }
  }
}
</style>
