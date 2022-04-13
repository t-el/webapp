<template>
    <div class="">
        <div  id="form" style="display:none;" class=" p-2 m-2 shadow-sm ">
            <form >
              <v-text-field
              outlined
              class="m-2 p-2"
              id="title"
                label="Title"
                hide-details="auto"
               ></v-text-field>
                    
                 <v-text-field
                 outlined
              class="m-2 p-2"
                id="tags"
                label="Tags (use space between tags )"
                hide-details="auto"
               ></v-text-field>
                <VueTrix   v-model="editorContent" placeholder="Enter content" localStorage/>
               <v-btn depressed v-on:click.prevent="add();" class="m-1"   color="primary" >Add</v-btn>
               <v-btn class="m-1" v-on:click.prevent="clear();" depressed    >Clear</v-btn>
            </form>
          
           
        </div>


                <div  id="form2" style="display:none;" class=" p-2 m-2 shadow-sm ">
            <form >
              <v-text-field
              outlined
              class="m-2 p-2"
              id="title2"
                label="Title"
                hide-details="auto"
               ></v-text-field>
                
                 <v-text-field
                 outlined
              class="m-2 p-2"
                id="tags2"
                label="Tags (use space between tags )"
                hide-details="auto"
               ></v-text-field>
                 <tinymce id="d1" v-model="txt"></tinymce>
               <v-btn depressed v-on:click.prevent="add2();" class="m-1"   color="primary" >Add</v-btn>
               <v-btn class="m-1" v-on:click.prevent="clear2();" depressed    >Clear</v-btn>
            </form>
          
           
        </div>

         <v-btn text class="m-3" v-on:click="show()"     color="green" >New Blog</v-btn>
          <v-btn text class="m-3" v-on:click="show2()"     color="primary" >New Blog</v-btn>
    </div>
</template>

<script>
  import jQuery from 'jquery';
  let $ = jQuery;
 import "vue-trix"
 import VueTrix from "vue-trix";


export default {
     data () {
    return {
     
      editorContent : "",
      txt:""
     
    }
},
methods : {
     async add(){
       let t = $("#tags").val() ;
       let tags = t.split(" ");
         if($("#title").val() != "" && this.editorContent != "" ){
              await fetch("http://localhost:5000/posts/insert",{
                method: 'POST',
                headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
                },

                body: JSON.stringify({title: $("#title").val() , body:this.editorContent ,tags:[...tags]})
                });
               
                this.clear();
                this.show();
         }else{
             $("#form").css("border","1px solid red");
         }
            
         },

          async add2(){
       let t = $("#tags2").val() ;
       let tags = t.split(" ");
         if($("#title2").val() != "" && this.txt != "" ){
              await fetch("http://localhost:5000/posts/insert",{
                method: 'POST',
                headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
                },

                body: JSON.stringify({title: $("#title2").val() , body:this.txt ,tags:[...tags]})
                });
               
                this.clear();
                this.show2();
         }else{
             $("#form2").css("border","1px solid red");
         }
            
         },

         show(){
             $("#form").slideToggle();
         },
          show2(){
             $("#form2").slideToggle();
         },
        clear(){
            $("#title").val("");
            this.editorContent = "";
         },
          clear2(){
            $("#title2").val("");
            this.txt = "";
         },
       
  
},
components : {
    VueTrix
}
}
</script>

<style scoped>

</style>