<!DOCTYPE html>
<html>
   <head>
      <title>How to disable scrolling in webpage using window.onscroll method </title>
      
      <style>
      
       .scrollable-place {
              height: 1000px;
        }
        h1{
         color: pink;
         }
      </style>
      
  </head>
   
<body>
      <h1>
          Disabling Scrolling
      </h1>
      
      <b>
           How to disable scrolling using JavaScript by the overriding window.onscroll function?
      </b>
      
     <p>
          Click on the buttons below to enable or disable scrolling.
     </p>
      
     <p class=”scrollable-place”>
        <button onclick=”disableScroll()”>
        Disable Scrolling
        </button>
     <button onclick=”enableScroll()”>Enable Scrolling
     </button>
     </p>
   
   <script>
      function disableScroll() {
       // Get the current page scroll position in the vertical direction
      scrollTop =
          window.pageYOffset || document.documentElement.scrollTop;
           
           
 // Get the current page scroll position in the horizontal direction 
 
    scrollLeft =
      window.pageXOffset || document.documentElement.scrollLeft;
      
      
     // if any scroll is attempted,
    // set this to the previous value
    window.onscroll = function() {
     window.scrollTo(scrollLeft, scrollTop);
    };
   }
   
     function enableScroll() {
        window.onscroll = function() {};
    }

   </script>

</body>
   
</html>
