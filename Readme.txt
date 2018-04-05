# walking-line-tab

# it's open source project you can using it to your projects.
# ==========================================================#

# How to use this jQuery plugin
# Put this code in your html page
# Copy the css file and put in your folder/root file and call from your html pages
<link rel="stylesheet" href="css/walking_line_tab.css">

<div class="td_tab__walking_line">
  <div class="td_tab__nav_container">
    <ul class="td_tab__nav_wrapper">
      <li class="td_tab__nav" id="td_tab_1">Tab one long text</li>
      <li class="td_tab__nav" id="td_tab_2">Tab 2</li>
      <li class="td_tab__nav" id="td_tab_3">Tab 3</li>
      <li class="td_tab__nav" id="td_tab_4">Tab 4 long text</li>
    </ul>
  </div>
    
  <div id="td_tab_1_content" class="td_tab__content">
    <p>lorem ipsum content 1</p>
  </div>
  <div id="td_tab_2_content" class="td_tab__content">
    <p>lorem ipsum content 2</p>
  </div>  
  <div id="td_tab_3_content" class="td_tab__content">
    <p>lorem ipsum content 3</p>
  </div>
</div>
<script src="https://code.jquery.com/jquery-1.9.1.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.4.1/jquery.easing.js"></script>

# Copy the Js file and put in your folder/root file  and call from your html pages
<script>
    $(document).ready(function(){
        $(".td_tab__walking_line").tabLine({
            speed: 400, // setup the speed transition
            easing: "easeOutExpo" // setup the easing type, please visit this web http://easings.net
        });
    })
</script><script src="js/walking_line_tab.js"></script>

# that's all happy coding! :)

