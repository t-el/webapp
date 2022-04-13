<template>
  
<div  class="m-2 p-4"  style="position:relative;" >
            
            <v-subheader>{{post.at | moment}}</v-subheader>
            <a  :href = "'/post/'+post.slug"
             target="_blank">
                <h4  class="m-2"  >{{post.title}}</h4>
            </a>
            
            <div class="">
                   <v-chip v-for="(p,i) in 3" v-bind:key="p"  class="ma-2"> {{post.tags[i]}} </v-chip>
                     <v-chip
                     outlined
                      v-if="post.tags.length > 3" >
                        + {{post.tags.length - 3}}
                    </v-chip>
            </div>
         
           
          

            <div style="" class="  ">
                <v-chip 
                class="m-1"
                outlined>
                   <v-icon
                    small  
                      class="material-icons">
                        comments
                    </v-icon> 
                     <v-subheader v-if="post.comments" >
                        {{post.comments.length}}
                    </v-subheader>
                     <v-subheader v-else >
                        0
                    </v-subheader>
                    </v-chip>
                    <v-chip
                    class="m-1"
                    outlined>
                     <v-icon  small
                      class="material-icons">
                       visibility
                    </v-icon> 
                    <v-subheader >
                        {{post.views}}
                    </v-subheader>

                    </v-chip>

                   
                     
            </div> 
           
        </div> 
        


</template>

<script>
  import jQuery from 'jquery';
  let $ = jQuery;
  import moment from 'moment';
export default {
    
    props :{
         post : Object
        },
        methods : {
            option(id){
                $('#'+id).slideToggle();
                console.log(id);
            }
        },
          filters: {
           moment: function (date) {
    return moment(date).format('MMMM Do YYYY');
  }
},

}

</script>

<style >
pre{
    padding:4px;
    background-color: rgba(0, 0, 0, 0.932);
    border-radius: 3px;
    color:rgb(0, 252, 21);
}
blockquote{
    padding: 5px;
    border-left :3px solid rgb(211, 211, 211);
}
.light{
    background-color:rgb(255, 255, 255);
}

.material-icons:hover{
    cursor: pointer;
    transition: 1ms ease-in;
    border-radius: 50%;
}
.alert{
    border-radius: 0;
    margin:0;
    padding: 0;
    background-color:white;
}
.list-group > li{
   cursor: pointer;
}
.list-group > li:hover{
   background-color:#007bff;
   color:white;
}
</style>