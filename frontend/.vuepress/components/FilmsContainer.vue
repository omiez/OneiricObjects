  <template>
    <div class="films-slider">
      <h1 class="film-title">Orange at <span>The Grifters</span></h1>
    <div  class="films-wrapper">
      <img
        class="film-cover"
        v-for="i in 12"
        :key="i"
        :src="baseUrl + '/uploads/the_breakfast_club_029a0d3995.png'"
        ></img>
    </div>
    </div>
<!--   <main
    class="home"
    aria-labelledby="main-title" -->
  <!-- > -->
<!--     <header class="hero">
      <img
        v-if="data.heroImage"
        :src="$withBase(data.heroImage)"
        :alt="data.heroAlt || 'hero'"
      >

      <h1
        v-if="data.heroText !== null"
        id="main-title"
      >
        {{ data.heroText || $title || 'Hello' }}
      </h1>

      <p
        v-if="data.tagline !== null"
        class="description"
      >
        {{ data.tagline || $description || 'Welcome to your VuePress site' }}
      </p>

      <p
        v-if="data.actionText && data.actionLink"
        class="action"
      >
        <NavLink
          class="action-button"
          :item="actionLink"
        />
      </p>
    </header>
 -->
<!--     <div
      v-if="data.features && data.features.length"
      class="features"
    >
      <div
        v-for="(feature, index) in data.features"
        :key="index"
        class="feature"
      >
        <h2>{{ (pageContent && pageContent.title) || featureTitle || feature.title }}</h2>
        <p>{{ (pageContent && pageContent.content) || pageContent || feature.details }}</p>
        
      </div>
      <div class="feature vid" >
        <iframe class="youtubeFrame" width="560" height="315" src="https://www.youtube.com/embed/KLkjZ9Rwm30" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div class="feature" >
    </div> -->

    <!-- <Content class="theme-default-content custom" /> -->

<!--     <div
      v-if="data.footer"
      class="footer"
    >
      {{ data.footer }}
    </div> -->
  <!-- </main> -->
</template>

<script>
// import NavLink from '@theme/components/NavLink.vue'
import gql from 'graphql-tag';
// import axios from 'axios'

export default {
  props: ['films', 'oneiros'],
  name: 'FilmsContainer',


    // data() {
    //   return {
    //       pageContent: null,
    //       featureTitle: null
    //   }
    // }, 

    // mounted() {
    //   axios.get('http://' + window.location.hostname + ':1337/page-content').then(response => {
    //     this.pageContent = response.data.content
    //     this.featureTitle = response.data.title
    //   })
    // },
  //   computed: {
  //   data () {
  //     return this.$page.frontmatter
  //   }
  // }
    computed: {
    // 时间降序后的博客列表
    baseUrl () {
      return process.env.BACKEND_URL || '';
    }
  }
}
</script>

<style lang="stylus" scoped="true">
  .films-wrapper
    display flex
    flex-wrap wrap
    justify-content space-between
  .film-cover
      width 24.922vw
      height 27vh
      border solid red 0.3px
  .films-slider
    background transparent
    position relative
  .film-title
    position absolute
    top -65px
</style>
