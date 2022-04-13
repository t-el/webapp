<template>
    <div>
        <v-progress-linear
                    :active="loading"
                    :indeterminate="loading"
                    
                    bottom
                    color="primary"
                  ></v-progress-linear>
         <v-alert class="m-2" type="error" v-if="error">
             Connect to Wifi
         </v-alert>
      
        <v-container>
               
            
                <h1>{{post.title}}</h1>
                 <div class="d-flex m-2">
                     <v-icon  small
                      class="material-icons">
                       visibility
                    </v-icon> 
                    <v-subheader >
                        {{post.views}}
                    </v-subheader>
                      <v-icon  small
                      class="material-icons">
                       question_answer
                    </v-icon>
                  
                    <v-subheader v-if="post.comments"  >
                         {{post.comments.length}} comments
                    </v-subheader>
                    <v-subheader v-else  >
                        0 comments 
                    </v-subheader>


                </div>
                
                <v-container>
                   
                        <div class="d-flex m-2 ">
                                    <v-icon  small
                                    class="material-icons">
                                    schedule
                                    </v-icon>
                                    <v-chip   class="ma-2"> {{post.at | moment}} </v-chip>
                            </div>
                    
                       
            
                
                    <div  class="   "><v-chip 
                    outlined class="m-2"  v-for="(p, i) in post.tags" v-bind:key="i" > 
                        <v-icon  small
                      class="m-1">
                       tag
                        </v-icon> 
                    
                       {{p}}

                        </v-chip> </div>

                       
                      
                
         
                 </v-container>
               
                 
                
                <p class="m-2 p-2" v-html="post.body"></p>
                <hr>
                 <v-chip outlined class="ma-1">
                     <v-icon  small
                      class="material-icons">
                       question_answer
                    </v-icon> 
                    <v-subheader v-if="post.comments"  >
                        {{post.comments.length}} comments
                    </v-subheader>
                    <v-subheader v-else  >
                        0 comments 
                    </v-subheader>

                    <v-btn
                    @click="comment_toglle()"
                        text
                        rounde
                        >
                        Comment about this post
                        <v-icon small>
                             unfold_less
                        </v-icon>
                    </v-btn>

                 </v-chip>
                 <div id="c_frm" style="display:none;" class="m-2">
                      <v-text-field
                  id="u_email"
            label="email"
            outlined
          ></v-text-field>
          <v-textarea
                id="c_body"
                outlined
                name="comment"
                label="comment"
          
           ></v-textarea>
           <v-btn
           @click="comment()"
           color=""
           depressed
           >
           Comment
           </v-btn>
                 </div>
                  
          <hr>
          <div  v-if="post.comments" >
              <v-card outlined class="card m-1 p-1" v-for="(c,i) in post.comments" :key="i" >
           
            <v-chip outlined>
                {{c.name}}<v-subheader>{{c.at | moment}}</v-subheader> 
                  
            </v-chip>
             <p>{{c.body}}</p>
           
              </v-card>
          </div>
          
            
    

        </v-container>
    </div>
</template>

<script>
import moment from 'moment'
  import jQuery from 'jquery';
  let $ = jQuery;
export default {
   data(){
       return{
           post : {},
           loading : true,
           error : false ,
           
       }

   },
   filters: {
  moment: function (date) {
    return moment(date).format('MMMM Do YYYY');
  },
  
},
   methods : {
      async comment(){
          await fetch("http://localhost:5000/add_comment/"+this.post.slug,{
                method: 'POST',
                headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
                },

                body: JSON.stringify({name:$("#u_email").val(),body:$("#c_body").val(),at:new Date()})
                });

                $("#u_email").val("") ;$("#c_body").val("") ;
                

      },
      comment_toglle(){
          $("#c_frm").slideToggle();
      },
    
   },
  async created(){
          
  let res = await fetch("http://localhost:5000/post/"+this.$route.params.id);
  await res.json().then((r)=>{
      this.loading = false; 
      if(!r.error){
       this.post = r
  }else{
     this.error = r.error 
  }
   
  });
   }
    
}
</script>

<style scoped>

</style>