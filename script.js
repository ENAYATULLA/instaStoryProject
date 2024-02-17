var arr = [
    {dp:"https://images.pexels.com/photos/1308881/pexels-photo-1308881.jpeg?auto=compress&cs=tinysrgb&w=300",story:"https://images.pexels.com/photos/1386599/pexels-photo-1386599.jpeg?auto=compress&cs=tinysrgb&w=600"},
    {dp:"https://images.pexels.com/photos/1319908/pexels-photo-1319908.jpeg?auto=compress&cs=tinysrgb&w=600",story:"https://images.pexels.com/photos/1382730/pexels-photo-1382730.jpeg?auto=compress&cs=tinysrgb&w=600"},
    {dp:"https://images.pexels.com/photos/1376041/pexels-photo-1376041.jpeg?auto=compress&cs=tinysrgb&w=600",story:"https://images.pexels.com/photos/1385478/pexels-photo-1385478.jpeg?auto=compress&cs=tinysrgb&w=600"},
    {dp:"https://images.pexels.com/photos/1382726/pexels-photo-1382726.jpeg?auto=compress&cs=tinysrgb&w=600",story:"https://images.pexels.com/photos/358372/pexels-photo-358372.jpeg?auto=compress&cs=tinysrgb&w=600"},
    {dp:"https://images.pexels.com/photos/1081685/pexels-photo-1081685.jpeg?auto=compress&cs=tinysrgb&w=600",story:"https://images.pexels.com/photos/1493088/pexels-photo-1493088.jpeg?auto=compress&cs=tinysrgb&w=600"},
    {dp:"https://images.pexels.com/photos/955413/pexels-photo-955413.jpeg?auto=compress&cs=tinysrgb&w=600",story:"https://images.pexels.com/photos/1080401/pexels-photo-1080401.jpeg?auto=compress&cs=tinysrgb&w=600"},
    {dp:"https://images.pexels.com/photos/1385472/pexels-photo-1385472.jpeg?auto=compress&cs=tinysrgb&w=600",story:"https://images.pexels.com/photos/620074/pexels-photo-620074.jpeg?auto=compress&cs=tinysrgb&w=600"},
]

var storiyan = document.querySelector("#storiyan")
var clutter = ""
arr.forEach(function(elem,idx){
    clutter += ` <div class="story">
    <img  id ="${idx}" src="${elem.dp}" alt="">
</div>`
})
document.querySelector("#storiyan").innerHTML = clutter

storiyan.addEventListener("click",function(dets){
    document.querySelector("#full-screen").style.display = "block"
    document.querySelector("#full-screen").style.backgroundImage = `url(${ arr[dets.target.id].story})`
    setTimeout(function(){
        document.querySelector("#full-screen").style.display = "none"

    },3000)
   
});