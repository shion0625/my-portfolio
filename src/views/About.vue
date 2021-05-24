<template>
  <div id="about-content">
    <div id="profile">
      <h2>PROFILE</h2>
      <div id="profile-content">
        <ul>
          <li v-for="(profile, index) in profiles" :key="index">
            {{ profile }}
          </li>
        </ul>
      </div>
    </div>
    <h2>SKILL</h2>
    <div class="skill-contents">
      <div class="skill-content" v-for="item in contents" :key="item.name">
        <h3>{{ item.name }}</h3>
        <table>
          <tr>
            <th>言語</th>
            <th>経験年数</th>
          </tr>
          <tr v-for="num in item.number" :key="num.id">
            <td v-for="info in num.description" :key="info.content">
              {{ info.content }}
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
      contents: [
        {
          name: "フロントエンド",
          number: [
            { description: [{ content: "HTML" }, { content: "2年" }] },
            { description: [{ content: "CSS" }, { content: "2年" }] },
            { description: [{ content: "SCSS" }, { content: "1年" }] },
            { description: [{ content: "Jquery" }, { content: "半年" }] },
            { description: [{ content: "Vue.js" }, { content: "1年" }] },
            { description: [{ content: "Bootstrap" }, { content: "半年" }] },
            { description: [{ content: "pug" }, { content: "半年" }] },
          ],
        },
        {
          name: "バックエンド",
          number: [
            { description: [{ content: "Node.js" }, { content: "2年" }] },
            { description: [{ content: "PHP" }, { content: "1年" }] },
            { description: [{ content: "Python" }, { content: "1年" }] },
          ],
        },
        {
          name: "データベース",
          number: [
            { description: [{ content: "MYSQL" }, { content: "1年" }] },
            { description: [{ content: "nedb" }, { content: "1年" }] },
          ],
        },
        {
          name: "その他",
          number: [
            { description: [{ content: "git" }, { content: "2年" }] },
            { description: [{ content: "slack" }, { content: "1年" }] },
            { description: [{ content: "vscode" }, { content: "2年" }] },
            { description: [{ content: "docker" }, { content: "1ヶ月" }] },
            { description: [{ content: "Wordpress" }, { content: "3ヶ月" }] },
          ],
        },
        {
          name: "学習したことがある言語",
          number: [
            { description: [{ content: "c" }, { content: "半年" }] },
            { description: [{ content: "c++" }, { content: "半年" }] },
            { description: [{ content: "Java" }, { content: "3ヶ月" }] },
          ],
        },
      ],
      profiles: ["名前: yododgawa kaito", "出身: 神奈川県", ""],
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
  font-family: "Courier New", Courier, monospace;
  h2 {
    font-size: 4rem;
    text-align: center;
  }
  #profile-content {
    li {
      margin: auto;
      width: 40%;
      display: list-item; /* 縦に並べる */
      list-style-type: none;
      text-transform: uppercase;
      padding: 0.5em;
      background: #ccc;
      text-align: center;
      font-size: 2.6rem;
      font-family: Georgia, "Times New Roman", Times, serif;
      @include mq() {
        font-size: 2.3rem;
      }
      @include mq(md) {
        margin: 0;
        width: 90%;
      }
      @include mq(sm) {
        font-size: 1.7rem;
      }
    }
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
        font-family: "Times New Roman", Times, serif;
      }
    }
  }
}
</style>
