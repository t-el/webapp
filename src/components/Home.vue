<template>
    <div>
     <div style="position:fixed;right:10px;bottom:10px;z-index:100;"  class="ma-2">
     
          <v-btn  
          small
          fab
          color="primary"
        
        > <a style="color:white;text-decoration:none;"  href="#top"> <v-icon>north</v-icon> </a>
        
        </v-btn>

     </div>
   
         <v-alert class="m-2" type="error" v-if="error">
             Connect to Wifi you are Offile
         </v-alert>
         <v-container>
           <v-row>
                  <v-avatar size="87" class="m-2">
                    <img
                       
                      src="../assets/me.png"
                      alt="Taha"
                    >
                  </v-avatar>
             
             <div style="display:none;" id="sinput">
               <v-text-field 
               
                     append-icon="search" 
                    :loading = "loading"
                    @input="search_q()" 
                    v-model="q"                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
                    solo
                    :hint="this.posts.length + ' posts founded'"
                   placeholder="What do u want "
                  >

                  </v-text-field>
             </div>
              
             <v-card 
             elevation="0"
             :loading = "loading"
              class ="p-2">
              <h3 v-if="this.posts.length == 0">
                <v-icon
                large
                >
                info
                </v-icon>
                No resaults founded for <b style="color:green;">{{q}}</b>
              </h3>
               <div class="d-flex ">
               </div>
               

                 
                <v-chip
                class="m-1"
                outlined
                >
                  Top Blogs by Taha Elkarroumy
                   <v-icon class="m-1"
                small>
                  sentiment_satisfied_alt
                </v-icon>
                </v-chip>
               
                
                    <v-chip
                    class="m-1"
                    outlined
                    >
                 Total : <v-badge
                        inline
                        color="purple"
                        :content = posts.length
                      ></v-badge>
                  
                </v-chip>
                  
                     <v-btn
                     @click="search()"
                     text
                     rounded
                     >
                      <v-icon class="ma-2" >
                    search
                     </v-icon>
                     </v-btn>
                
              
              <div>
                 
                 <v-card 
                 
                    elevation="4"
                 class="m-3 " id="h"   v-for="(post,i) in posts" :key="post.__id" > 
                   
                     
                     <div v-if="i < posts_count">
                      <Post    :post="post"/>
                     </div>
                     
                 </v-card>

               <center>
               <v-btn
               v-if="this.posts.length != 0"
              @click="see_more()"
               text
               color="primary"
               >
                       See More ...
              </v-btn>
               </center>
              </div>
              
             </v-card>

              <div>
                 <v-subheader style="font-weight:bold;position:absolute;right:0;top:0;">
                   <v-icon class="ma-2" small>
                     star 
                     </v-icon>  Most viewed posts 
                     <v-btn
                     @click="toggle()"
                     text
                     
                     >
                      <v-icon class="ma-2" small>
                    unfold_less
                     </v-icon>
                     </v-btn>
                 </v-subheader>

                  <v-card
                      outlined
                      elevation="10"
                    id="most" style="position:absolute;right:0;top:35px;display:none;" class=" p-1 ">
                    <v-subheader  class="card-header" style="font-weight:bold;">
                   <v-icon class="ma-2" small>
                     star 
                     </v-icon>  Most viewed posts 
                    
                    </v-subheader>
                    <v-progress-linear
                    :active="topten_loading"
                    :indeterminate="topten_loading"
                    absolute
                    bottom
                    color="primary"
                  ></v-progress-linear>

                 
                  <div 
                  v-for="post in topten_posts" :key="post.slug">
                   
                    <a style="text-decoration:none;"  target="_blank" :href="'/post/'+post.slug">
                        <v-chip class="m-1"
                      outlined
                    >{{post.views}} views</v-chip>
                      <v-subheader class=" m-1">
                                  <v-icon
                                  small>
                                    open_in_new
                                  </v-icon>
                                   {{post.title}}
                       </v-subheader>
                     
                    </a>
                  </div>
                  
                   
                  </v-card>
             </div>
                  
           </v-row>      
         </v-container>
    </div>
</template>

<script>

//import axios from 'axios';
 import jQuery from 'jquery';
  let $ = jQuery;

  import Post from './Post.vue'
export default {
    data () {
    return {
      loading :true  ,
      posts: {},
      topten_posts: {},
      error:false,
      topten_loading : true,
      posts_count : 10,
      q:""
  
    }
  },
     methods : {
         async topten(){
           let res = await fetch("http://localhost:5000/topten");
           await res.json().then((r)=>{
            this.topten_loading = false; 
            this.topten_posts = r
          });
         },

       see_more(){
         this.posts_count += 5; 
       },
       toggle(){
         $("#most").slideToggle()
       },
       search(){
         $("#sinput").slideToggle();
       },
        async search_q(){
         let res = await fetch("http://localhost:5000/posts/search?q="+this.q);
           await res.json().then((r)=>{
              this.loading = false;
                if(!r.error){
                  
              this.posts = r
            }else{
              this.error = r.error 
            }
 
          }) ;
       },

     },

  components : {
      Post
  },

 async mounted () {
 this.$nextTick(async function () {
     let res = await fetch("http://localhost:5000/posts");
          await res.json().then((r)=>{
            this.loading = false;
              if(!r.error){
            this.posts = r
          }else{
            this.error = r.error 
          }
          }) ; 
          this.topten();
  
  });
 
  }


}

</script>

<style  scoped>
kbd{
    border-radius:0 ;
}
.card{
  border-radius:0 ;
}
#h:hover{
  box-shadow:  1px 1px 6px rgb(206, 206, 206);
  background-color:rgba(248, 248, 248, 0.945);
  cursor:pointer;
}

</style>