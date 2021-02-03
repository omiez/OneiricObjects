  <template>
    <div class="root-div">
      
        <div class="room-bg" v-if="rooms != null" :style="bgStyle"/>
      
      <FilmsContainer/>
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
  name: 'BlueRoom',


    data() {
      return {
          Background: {url: ''},
          rooms : null
      }
    }, 

    // mounted() {
    //   axios.get('http://' + window.location.hostname + ':1337/page-content').then(response => {
    //     this.pageContent = response.data.content
    //     this.featureTitle = response.data.title
    //   })
    // },

  apollo: {
    // Simple query that will update the page content
      rooms: {
        query: gql`query {
            rooms(where: { Name: "BlueRoom" }) {
              id
              Name
              Background {
                url
              }
              Oneiroi {
                id
                Name
                Description
              }
            }
        }`,
        prefetch: false
      }
  },
  computed: {
    // 时间降序后的博客列表
    baseUrl () {
      return process.env.BACKEND_URL || '';
    },
    bgStyle() {
      return "background: #ffffff url(\'" + this.baseUrl + (this.rooms.length > 0 ? this.rooms[0].Background.url: '') + "\') no-repeat fixed center / cover;  height:100vh;"
    }
  }
}
</script>

<style lang="stylus" scoped="true">
  .root-div{
    width:100vw;position: relative;left: 50%;right: 50%; margin-left: -50vw; margin-right: -50vw;
  }
  .room-bg
    width: 100%
</style>
