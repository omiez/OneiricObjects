  <template>
    <div class="root-div" :class="{'cloged' : isSliderOpen, 'vid-open' : isVideoOpen}">
      <div class="video-container" v-if="selectedFilm != null" >
        <a @click="closeVideo" style="cursor: pointer;" ><img class="ix" src="x.svg"></a>
        <img class="vid" :src="baseUrl + selectedFilm.Cover.url">
        <div class="vid-details">
          <h1 class="vid-title">{{ selectedFilm.Title }}</h1>
          <p class="vid-title">Year | Director Name | Genre, second Genre</p>
<!--           <p class="vid-title">{{ selectedFilm.Year }} | {{ selectedFilm.Director }} | {{ selectedFilm.Genre}}</p>
          <p> -->
          <p>
            {{ selectedFilm.Details}}
          </p>
          <p>
            Whether the and that undispriz'd coil, must give unwortune, to gruntry life; and sweath the name with the us pause. perchance dreat is mome what the under the ill, slings againsolution: whose in there's calamit
          </p>
          <div class="films-objects">
            <span>More object on this movie:</span><br/>
            <span v-for="obj in selectedFilm.Oneiroi" > 
              <img v-if="obj.Name != selectedOneirios.Name" class="more-obj" :src="baseUrl + obj.Image[0].url">
            </span>
          </div>
        </div>
      </div>
        <div id="Top" style="height: 0.4px">.</div>
        <div class="room-bg" v-if="rooms != null" :style="bgStyle">
          <span @click="openSlider({Name: 'Cigarette'})"><router-link to="#Films">
          <img :src="baseUrl + '/uploads/cigarette_oneiric_2beed38b6a.png'" class="img-cig">
          </router-link></span>
        </div>
      <FilmsContainer v-if="selectedOneirios.Name != 'none'" :Oneirios="selectedOneirios" id="Films"/>
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
          rooms : null,
          selectedOneirios: {
        Name: 'none'
      },
          isSliderOpen : false,
          isVideoOpen: false,
          selectedFilm: null

      }
    },
    methods: {
      // handlescroll() {
      //   this.isSliderOpen = false;
      //   router.push('/')
      // },
      openSlider(object) {
        if(this.isSliderOpen){
          this.$router.push('#Top');
          this.isSliderOpen = false;
        } else
          this.isSliderOpen = true;
          this.selectedOneirios = object;
      },
      closeVideo() {
        this.isVideoOpen = false;
        this.$router.push('#Top');
        this.isSliderOpen = false;
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
            rooms(where: { Name: "GreenRoom" }) {
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
    position relative
  .img-cig
    position fixed
    left 116px
    width 150px
    bottom 230px
  .img-cig:hover
    filter: drop-shadow(7px 7px 7px rgba(255, 255, 255, 0.5));
  .cloged .room-bg, .vid-open .room-bg
    filter: brightness(50%);
  .video-container
    p
      line-height 1
      margin 0
      margin-top 10px
    width: 1000.2px;
    display none
    position fixed
    .vid
      width 35vw
      height 35vh
    .ix
      width 17px
      height auto
      vertical-align top
      position: relative
      left -5px
      top -25px
  .vid-open .video-container
    display block
    z-index 1
    left calc(50% - 480px)
    top calc(50% - 150px)
  .vid-title
    margin 5px auto
    vertical-align: top;
    margin-left: 30px;
  .vid-details
    color red
    display: inline-block;
    vertical-align: top;
    width 450px
    margin-left 15px
  .more-obj
    width 70px
    height auto
  .films-objects
    margin-top 15px
</style>
