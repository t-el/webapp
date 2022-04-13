<template>
  <div>
    <nav id="top" class="card ">
        <ul style="position:relative;" class="d-flex ">
               <li><a href="/">Taha.Elkarroumy</a></li> 
        </ul>
       <div class="m-2" style="position:absolute;right:10px;">
         <v-btn
         text
         color="purple"
         >
          <a  href="#footer">BIO</a>
         </v-btn>
        
      
       </div>
    </nav>
           
  </div>
</template>

<script >


export default {
  name: 'navigation',
  props: {
    is_loged_in: Boolean
  }
  ,
  methods:{
    gotourl(url){
      window.open(url,'_blank');
    }
    
  },
}
</script>


<style scoped>

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
   background-color:rgb(255, 255, 255);
    color:black;
    font-weight: bold;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

li {
  float: left;
}

li a {
  display: block;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  color: rgba(0, 0, 0, 0.705);
}

/* Change the link color to #111 (black) on hover */
li a:hover {
  background-color: rgb(235, 235, 235);
}

a{
  display: block;
  text-align: center;
  padding: 13px 15px;
  text-decoration: none;
  color: rgba(0, 0, 0, 0.705);
}
ul .card{
  border-radius:0 ;
  border-bottom: none;
}
.card{
    border-radius:0 ;
 
}
.active{
  border-bottom: 3px solid rgb(85, 153, 255);

}
</style>
