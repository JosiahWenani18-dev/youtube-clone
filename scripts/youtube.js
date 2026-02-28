const videos = [{
  thumbnail: "thumbnails/thumbnail-1.webp",
  time: 1420,
  profile_picture: "channel-pictures/channel-1.jpeg",
  video_title: "Talking Tech and AI with Google CEO Sundar Pichai!",
  author: "Marques Brownlee",
  video_stats: "3.4M views &#183; 6 months ago"
}, {
  thumbnail: "thumbnails/thumbnail-2.webp",
  time: 822,
  profile_picture: "channel-pictures/channel-2.jpeg",
  video_title: "Try Not To Laugh Challenge #9",
  author: "Markipilier",
  video_stats: "1.9M views &#183; 4 years ago"
}, {
  thumbnail: "thumbnails/thumbnail-3.webp",
  time: 913,
  profile_picture: "channel-pictures/channel-3.jpeg",
  video_title: "Crazy Tik Toks Taken Moments Before DISASTER",
  author: "SSSniperWolf",
  video_stats: "12M views &#183; 1 year ago"
}, {
  thumbnail: "thumbnails/thumbnail-4.webp",
  time: 2209,
  profile_picture: "channel-pictures/channel-4.jpeg",
  video_title: "The Simplest Math Problem No One Can Solve - Collatz Conjecture",
  author: "Veritasium",
  video_stats: "18M views &#183; 4 months ago"
}, {
  thumbnail: "thumbnails/thumbnail-5.webp",
  time: 1117,
  profile_picture: "channel-pictures/channel-5.jpeg",
  video_title: "Kadane\'s Algorithm to Maximum Sum Subarray Problem",
  author: "CS Dojo",
  video_stats: "519k views &#183; 5 years ago"
}, {
  thumbnail: "thumbnails/thumbnail-6.webp",
  time: 1959,
  profile_picture: "channel-pictures/channel-6.jpeg",
  video_title: "Anything You Can Fit In The Circle I’ll Pay For",
  author: "MrBeast",
  video_stats: "141M views &#183; 1 year ago"
}, {
  thumbnail: "thumbnails/thumbnail-7.webp",
  time: 1013,
  profile_picture: "channel-pictures/channel-7.jpeg",
  video_title: "Why Planes Don't Fly Over Tibet",
  author: "RealLifeLore",
  video_stats: "6.6M views &#183; 1 year ago"
}, {
  thumbnail: "thumbnails/thumbnail-8.webp",
  time: 712,
  profile_picture: "channel-pictures/channel-8.jpeg",
  video_title: "Inside The World's Biggest Passenger Plane",
  author: "Tech Vision",
  video_stats: "3.7M views &#183; 10 months ago"
}, {
  thumbnail: "thumbnails/thumbnail-9.webp",
  time: 1317,
  profile_picture: "channel-pictures/channel-9.jpeg",
  video_title: "The SECRET to Super Human STRENGTH",
  author: "ThenX",
  video_stats: "20M views &#183; 3 years ago"
}, {
  thumbnail: "thumbnails/thumbnail-10.webp",
  time: 753,
  profile_picture: "channel-pictures/channel-10.jpeg",
  video_title: "How The World's Largest Cruise Ship Makes 30,000 Meals Every Day",
  author: "Bussiness Insider",
  video_stats: "14M views &#183; 1 year ago"
}, {
  thumbnail: "thumbnails/thumbnail-11.webp",
  time: 410,
  profile_picture: "channel-pictures/channel-11.jpeg",
  video_title: "Dubai's Crazy Underwater Train and Other Things #Only in Dubai",
  author: "Destination Tips",
  video_stats: "3M views &#183; 1 year ago"
}, {
  thumbnail: "thumbnails/thumbnail-12.webp",
  time: 451,
  profile_picture: "channel-pictures/channel-12.jpeg",
  video_title: "What would happen if you didn’t drink water? - Mia Nacamulli",
  author: "TED-Ed",
  video_stats: "12M views &#183; 5 years ago"
}];

let displayHTML = document.getElementById("videos");

videos.forEach((video) => {
  displayHTML.innerHTML += `<div class="video-preview">
    <div class="thumbnail-row">
      <a href="https://www.youtube.com/watch?v=lFm4EM1juls">
        <img class="thumbnail" src="${video.thumbnail}">
      </a>
      <div class="video-time">${video.time}</div>
    </div>
    <div class="description-container">
      <div class="channel-picture">
        <a href="https://www.youtube.com/channel/UCHAK6CyegY22Zj2GWrcaIxg">
          <img class="profile-picture" src="${video.profile_picture}">
        </a>
      </div>
      <div class="video-description">
        <p class="video-title">
          <a class="video-link" href="https://www.youtube.com/watch?v=lFm4EM1juls">
            ${video.video_title}
          </a>
        </p>
        <p class="video-author">
          ${video.author}
        </p>
        <p class="video-stats">
          ${video.video_stats}
        </p>
      </div>
    </div>`;

});