/*Research Details Table*/

const researchTable = document.querySelector(".main");

const research = [
  {
    title: "Monitor and Manage Google Cloud Resources",
    click_1:"Skill badge Link",
    sb_link:"https://www.cloudskillsboost.google/course_templates/653",
    click_2:"Playlist Solution Link",
    yt_link:"https://www.youtube.com/playlist?list=PL5aOhqv5LVIpiBHWXaL0B_hhwwjojfWVJ",
    credit: "4",
    labs:"4",
    box1: "absPopup1",
   lablink: `<a href="https://www.cloudskillsboost.google/focuses/44159?catalog_rank=%7B%22rank%22%3A1%2C%22num_filters%22%3A0%2C%22has_search%22%3Atrue%7D&parent=catalog&search_id=30018577" target="_blank">Cloud IAM: Qwik Start</a>
    <a href="https://www.cloudskillsboost.google/focuses/10599?catalog_rank=%7B%22rank%22%3A1%2C%22num_filters%22%3A0%2C%22has_search%22%3Atrue%7D&parent=catalog&search_id=30018603 target="_blank"">Cloud Monitoring: Qwik Start</a>
    <a href="https://www.cloudskillsboost.google/focuses/1763?catalog_rank=%7B%22rank%22%3A1%2C%22num_filters%22%3A0%2C%22has_search%22%3Atrue%7D&parent=catalog&search_id=30018610" target="_blank">Cloud Functions: Qwik Start - Console</a>
    <a href="https://www.cloudskillsboost.google/focuses/60441?catalog_rank=%7B%22rank%22%3A1%2C%22num_filters%22%3A0%2C%22has_search%22%3Atrue%7D&parent=catalog&search_id=30018621" target="_blank">Monitor and Manage Google Cloud Resources: Challenge Lab</a>`,
    box2 : "popup1",
    image: "assets/images/skill-badge/sb1.png",
    video: {
      link: `<a href="https://youtu.be/7d6JdPUK6jw?si=LnSJifEcYMgyGCvb" target="_blank">Cloud IAM: Qwik Start</a>
      <a href="https://youtu.be/33iEGdqTxK0?si=6EuLoeQNkM6lzgOA" target="_blank">Cloud Monitoring: Qwik Start</a>
      <a href="https://youtu.be/TbX83VJIEKU?si=BZoJ5VTuMFPVLCmt" target="_blank">Cloud Functions: Qwik Start - Console</a>
      <a href="https://youtu.be/WZ-Ixqgfk_Q?si=7n7ziVbK6NqVOjzm" target="_blank">Monitor and Manage Google Cloud Resources: Challenge Lab</a>`
  },
  },

  // sb 2
  {
    title: "Store, Process, and Manage Data on Google Cloud - Console",
    click_1:"Skill badge Link",
    sb_link:"https://www.cloudskillsboost.google/course_templates/658",
    click_2:"Playlist Solution Link",
    yt_link:"https://www.youtube.com/playlist?list=PL5aOhqv5LVIq1_ipny_CDzMqiW2O7d5X_",
    credit: "3",
    labs:"4",
    box1: "absPopup1",
   lablink: `<a href="https://www.cloudskillsboost.google/focuses/1760?catalog_rank=%7B%22rank%22%3A1%2C%22num_filters%22%3A0%2C%22has_search%22%3Atrue%7D&parent=catalog&search_id=30018627" target="_blank">Cloud Storage: Qwik Start - Cloud Console</a>
    <a href="https://www.cloudskillsboost.google/focuses/1763?catalog_rank=%7B%22rank%22%3A1%2C%22num_filters%22%3A0%2C%22has_search%22%3Atrue%7D&parent=catalog&search_id=30018610" target="_blank">Cloud Functions: Qwik Start - Console</a>
    <a href="https://www.cloudskillsboost.google/focuses/3719?catalog_rank=%7B%22rank%22%3A1%2C%22num_filters%22%3A0%2C%22has_search%22%3Atrue%7D&parent=catalog&search_id=30018647" target="_blank">Pub/Sub: Qwik Start - Console</a>
    <a href="https://www.cloudskillsboost.google/focuses/61486?catalog_rank=%7B%22rank%22%3A2%2C%22num_filters%22%3A0%2C%22has_search%22%3Atrue%7D&parent=catalog&search_id=30018659" target="_blank">Store, Process, and Manage Data on Google Cloud: Challenge Lab</a>`,
    box2 : "popup1",
    image: "assets/images/skill-badge/sb2.png",
    video: {
      link: `<a href="https://youtu.be/_1D6Lv8qz9M?si=geT9Y8SRvXrpGahM" target="_blank">Cloud Storage: Qwik Start - Cloud Console</a>
      <a href="https://youtu.be/TbX83VJIEKU?si=BZoJ5VTuMFPVLCmt" target="_blank">Cloud Functions: Qwik Start - Console</a>
      <a href="https://youtu.be/w65dbHC98T8?si=QN3iLLWQK0-2klpN" target="_blank">Pub/Sub: Qwik Start - Console</a>
      <a href="https://youtu.be/QSok0fgr1aI?si=5pemgniUV8rnxClw" target="_blank">Store, Process, and Manage Data on Google Cloud: Challenge Lab</a>`
  },
  },

  // sb 3
  {
    title: "Integrate with Machine Learning APIs",
    click_1:"Skill badge Link",
    sb_link:"https://www.cloudskillsboost.google/course_templates/630",
    click_2:"Playlist Solution Link",
    yt_link:"https://www.youtube.com/playlist?list=PL5aOhqv5LVIoA9zJnIllWdcxAIyAG7pVU",
    credit: "31",
    labs:"7",
    box1: "absPopup1",
    lablink: `<a href="https://www.cloudskillsboost.google/focuses/3473?catalog_rank=%7B%22rank%22%3A1%2C%22num_filters%22%3A0%2C%22has_search%22%3Atrue%7D&parent=catalog&search_id=30018665" target="_blank">Introduction to APIs in Google Cloud</a>
     <a href="https://www.cloudskillsboost.google/focuses/1836?catalog_rank=%7B%22rank%22%3A1%2C%22num_filters%22%3A0%2C%22has_search%22%3Atrue%7D&parent=catalog&search_id=30018671" target="_blank">Extract, Analyze, and Translate Text from Images with the Cloud ML APIs</a>
     <a href="https://www.cloudskillsboost.google/focuses/1749?catalog_rank=%7B%22rank%22%3A1%2C%22num_filters%22%3A0%2C%22has_search%22%3Atrue%7D&parent=catalog&search_id=30018677" target="_blank">Classify Text into Categories with the Natural Language API</a>
     <a href="https://www.cloudskillsboost.google/focuses/1841?catalog_rank=%7B%22rank%22%3A1%2C%22num_filters%22%3A0%2C%22has_search%22%3Atrue%7D&parent=catalog&search_id=30018681" target="_blank">Detect Labels, Faces, and Landmarks in Images with the Cloud Vision API</a>
     <a href="https://www.cloudskillsboost.google/focuses/1843?catalog_rank=%7B%22rank%22%3A1%2C%22num_filters%22%3A0%2C%22has_search%22%3Atrue%7D&parent=catalog&search_id=30018685" target="_blank">Entity and Sentiment Analysis with the Natural Language API</a>
     <a href="https://www.cloudskillsboost.google/focuses/1241?catalog_rank=%7B%22rank%22%3A1%2C%22num_filters%22%3A0%2C%22has_search%22%3Atrue%7D&parent=catalog&search_id=30018693" target="_blank">Awwvision: Cloud Vision API from a Kubernetes Cluster</a>
     <a href="https://www.cloudskillsboost.google/focuses/12704?catalog_rank=%7B%22rank%22%3A1%2C%22num_filters%22%3A0%2C%22has_search%22%3Atrue%7D&parent=catalog&search_id=30018697" target="_blank">Integrate with Machine Learning APIs: Challenge Lab</a>`,
    box2 : "popup1",
    image: "assets/images/skill-badge/sb3.png",
    video: {
      link: `<a href="https://youtu.be/t_qG_Ucw7I8?si=9PpyPO_ZSoi0ZYIP" target="_blank">Introduction to APIs in Google Cloud</a>
      <a href="https://youtu.be/aRDqX9UTXFE?si=GqKomphG4bFNnttr" target="_blank">Extract, Analyze, and Translate Text from Images with the Cloud ML APIs</a>
      <a href="https://youtu.be/8n4uH_ZIgio?si=AntH5-d5lms69NU8" target="_blank">Classify Text into Categories with the Natural Language API</a>
      <a href="https://youtu.be/vm-5Dan3PYk?si=zBhhpZsKMltH_Cvf" target="_blank">Detect Labels, Faces, and Landmarks in Images with the Cloud Vision API</a>
      <a href="https://youtu.be/FlT5lhV-3yc?si=J33wlcoRnRIHj-Ws" target="_blank">Entity and Sentiment Analysis with the Natural Language API</a>
      <a href="https://youtu.be/_OVl_Ti9_NI?si=T68whUfQpEiHXCkm" target="_blank">Awwvision: Cloud Vision API from a Kubernetes Cluster</a>
      <a href="https://youtu.be/V2rU2l6zf3A?si=i2JjPsQ1Q9L8YhJ4" target="_blank">Integrate with Machine Learning APIs: Challenge Lab</a>`
  },
  },

  //sb 4
  {
    title: "Get Started with API Gateway",
    click_1:"Skill badge Link",
    sb_link:"https://www.cloudskillsboost.google/course_templates/662",
    click_2:"Playlist Solution Link",
    yt_link:"https://www.youtube.com/playlist?list=PL5aOhqv5LVIrOi2_D5L0L7iwAgXCsFuS0",
    credit: "3",
    labs:"4",
    box1: "absPopup1",
   lablink: `<a href="https://www.cloudskillsboost.google/focuses/17996?catalog_rank=%7B%22rank%22%3A1%2C%22num_filters%22%3A0%2C%22has_search%22%3Atrue%7D&parent=catalog&search_id=30018701" target="_blank">API Gateway: Qwik Start</a>
    <a href="https://www.cloudskillsboost.google/focuses/3719?catalog_rank=%7B%22rank%22%3A1%2C%22num_filters%22%3A0%2C%22has_search%22%3Atrue%7D&parent=catalog&search_id=30018647" target="_blank">Pub/Sub: Qwik Start - Console</a>
    <a href="https://www.cloudskillsboost.google/focuses/1763?catalog_rank=%7B%22rank%22%3A1%2C%22num_filters%22%3A0%2C%22has_search%22%3Atrue%7D&parent=catalog&search_id=30018610" target="_blank">Cloud Functions: Qwik Start - Console</a>
    <a href="https://www.cloudskillsboost.google/focuses/61484?catalog_rank=%7B%22rank%22%3A1%2C%22num_filters%22%3A0%2C%22has_search%22%3Atrue%7D&parent=catalog&search_id=30018703" target="_blank">Getting Started with API Gateway: Challenge Lab</a>`,
    box2 : "popup1",
    image: "assets/images/skill-badge/sb4.png",
    video: {
      link: `<a href="https://youtu.be/7yOTs0bDIeQ?si=Riu_91j7JmuXYk0_" target="_blank">API Gateway: Qwik Start</a>
      <a href="https://youtu.be/w65dbHC98T8?si=QN3iLLWQK0-2klpN" target="_blank">Pub/Sub: Qwik Start - Console</a>
      <a href="https://youtu.be/TbX83VJIEKU?si=BZoJ5VTuMFPVLCmt" target="_blank">Cloud Functions: Qwik Start - Console</a>
      <a href="https://youtu.be/7yOTs0bDIeQ?si=McZB_wcFWUkL4-La" target="_blank">Getting Started with API Gateway: Challenge Lab</a>`
  },
  },

  // sb 5
  {
    title: "Serverless Firebase Development",
    click_1:"Skill badge Link",
    sb_link:"https://www.cloudskillsboost.google/course_templates/649",
    click_2:"Playlist Solution Link",
    yt_link:"https://www.youtube.com/playlist?list=PL5aOhqv5LVIoTDwOXD5BCsvTipar_E4Im",
    credit: "16",
    labs:"4",
    box1: "absPopup1",
    lablink: `<a href="https://www.cloudskillsboost.google/focuses/8392?catalog_rank=%7B%22rank%22%3A1%2C%22num_filters%22%3A0%2C%22has_search%22%3Atrue%7D&parent=catalog&search_id=30018705" target="_blank">Importing Data to a Firestore Database</a>
     <a href="https://www.cloudskillsboost.google/focuses/8391?catalog_rank=%7B%22rank%22%3A1%2C%22num_filters%22%3A0%2C%22has_search%22%3Atrue%7D&parent=catalog&search_id=30018709" target="_blank">Build a Serverless Web App with Firebase</a>
     <a href="https://www.cloudskillsboost.google/focuses/14353?catalog_rank=%7B%22rank%22%3A1%2C%22num_filters%22%3A0%2C%22has_search%22%3Atrue%7D&parent=catalog&search_id=30018714" target="_blank">Deploy a Hugo Website with Cloud Build and Firebase Pipeline</a>
     <a href="https://www.cloudskillsboost.google/focuses/14677?catalog_rank=%7B%22rank%22%3A1%2C%22num_filters%22%3A0%2C%22has_search%22%3Atrue%7D&parent=catalog&search_id=30018723" target="_blank">Serverless Firebase Development: Challenge Lab</a>`,
    box2 : "popup1",
    image: "assets/images/skill-badge/sb5.png",
    video: {
      link: `<a href="https://youtu.be/bVADFl9hGyM?si=0NP88wWKHyg2hjop" target="_blank">Importing Data to a Firestore Database</a>
      <a href="https://youtu.be/ZWyFv_ewR2E?si=UL1iskDYxx-icHWa" target="_blank">Build a Serverless Web App with Firebase</a>
      <a href="https://youtu.be/5EVV_heXWVQ?si=TvyYKiYO4zXcf5Fy" target="_blank">Deploy a Hugo Website with Cloud Build and Firebase Pipeline</a>
      <a href="https://youtu.be/6lLgX3FmPoo?si=SJ5pXIWLIc3b-G4H" target="_blank">Serverless Firebase Development: Challenge Lab</a>`
  },
  },

  // sb 6
  {
    title: "Perform Foundational Infrastructure Tasks in Google Cloud",
    click_1:"Skill badge Link",
    sb_link:"https://www.cloudskillsboost.google/course_templates/637",
    click_2:"Playlist Solution Link",
    yt_link:"https://www.youtube.com/playlist?list=PL5aOhqv5LVIo88cIyHua-gOVeM2VmsIGf",
    credit: "8",
    labs:"6",
    box1: "absPopup1",
    lablink: `<a href="https://www.cloudskillsboost.google/focuses/1760?catalog_rank=%7B%22rank%22%3A1%2C%22num_filters%22%3A0%2C%22has_search%22%3Atrue%7D&parent=catalog&search_id=30018627" target="_blank">Cloud Storage: Qwik Start - Cloud Console</a>
     <a href="https://www.cloudskillsboost.google/focuses/44159?catalog_rank=%7B%22rank%22%3A1%2C%22num_filters%22%3A0%2C%22has_search%22%3Atrue%7D&parent=catalog&search_id=30018577" target="_blank">Cloud IAM: Qwik Start</a>
     <a href="https://www.cloudskillsboost.google/focuses/10599?catalog_rank=%7B%22rank%22%3A1%2C%22num_filters%22%3A0%2C%22has_search%22%3Atrue%7D&parent=catalog&search_id=30018603" target="_blank">Cloud Monitoring: Qwik Start</a>
     <a href="https://www.cloudskillsboost.google/focuses/916?catalog_rank=%7B%22rank%22%3A1%2C%22num_filters%22%3A0%2C%22has_search%22%3Atrue%7D&parent=catalog&search_id=30018727" target="_blank">Cloud Functions: Qwik Start - Command Line</a>
     <a href="https://www.cloudskillsboost.google/focuses/925?catalog_rank=%7B%22rank%22%3A1%2C%22num_filters%22%3A0%2C%22has_search%22%3Atrue%7D&parent=catalog&search_id=30018741" target="_blank">Pub/Sub: Qwik Start - Command Line</a>
     <a href="https://www.cloudskillsboost.google/focuses/10379?catalog_rank=%7B%22rank%22%3A1%2C%22num_filters%22%3A0%2C%22has_search%22%3Atrue%7D&parent=catalog&search_id=30018745" target="_blank">Multiple VPC Networks lab</a>`,
    box2 : "popup1",
    image: "assets/images/skill-badge/sb6.png",
    video: {
      link: `<a href="https://youtu.be/_1D6Lv8qz9M?si=geT9Y8SRvXrpGahM" target="_blank">Cloud Storage: Qwik Start - Cloud Console</a>
      <a href="https://youtu.be/7d6JdPUK6jw?si=LnSJifEcYMgyGCvb" target="_blank">Cloud IAM: Qwik Start</a>
      <a href="https://youtu.be/33iEGdqTxK0?si=6EuLoeQNkM6lzgOA" target="_blank">Cloud Monitoring: Qwik Start</a>
      <a href="https://youtu.be/bTw9ZqQ3luA?si=SfOWIDNsVAD7_lXu" target="_blank">Cloud Functions: Qwik Start - Command Line</a>
      <a href="https://youtu.be/xtaxshROwfE?si=HnnAAdZM3wetkpvM" target="_blank">Pub/Sub: Qwik Start - Command Line</a>
      <a href="https://youtu.be/GDbKxnv9vyE?si=FNDenIIgRO--BWSt" target="_blank">Multiple VPC Networks lab</a>`
  },
  },

  // sb 7 
  {
    title: "Insights from Data with BigQuery",
    click_1:"Skill badge Link",
    sb_link:"https://www.cloudskillsboost.google/course_templates/632",
    click_2:"Playlist Solution Link",
    yt_link:"https://www.youtube.com/playlist?list=PL5aOhqv5LVIrjppVa-ahMadHG741W4agn",
    credit: "6",
    labs:"6",
    box1: "absPopup1",
    lablink: `<a href="https://www.cloudskillsboost.google/focuses/2802?catalog_rank=%7B%22rank%22%3A1%2C%22num_filters%22%3A0%2C%22has_search%22%3Atrue%7D&parent=catalog&search_id=30018750" target="_blank">Introduction to SQL for BigQuery and Cloud SQL</a>
     <a href="https://www.cloudskillsboost.google/focuses/577?catalog_rank=%7B%22rank%22%3A1%2C%22num_filters%22%3A0%2C%22has_search%22%3Atrue%7D&parent=catalog&search_id=30018751" target="_blank">BigQuery: Qwik Start - Command Line</a>
     <a href="https://www.cloudskillsboost.google/focuses/3618?catalog_rank=%7B%22rank%22%3A1%2C%22num_filters%22%3A0%2C%22has_search%22%3Atrue%7D&parent=catalog&search_id=30018757" target="_blank">Exploring Your Ecommerce Dataset with SQL in Google BigQuery</a>
     <a href="https://www.cloudskillsboost.google/focuses/3642?catalog_rank=%7B%22rank%22%3A1%2C%22num_filters%22%3A0%2C%22has_search%22%3Atrue%7D&parent=catalog&search_id=30018762" target="_blank">Troubleshooting Common SQL Errors with BigQuery</a>
     <a href="https://www.cloudskillsboost.google/focuses/3614?catalog_rank=%7B%22rank%22%3A1%2C%22num_filters%22%3A0%2C%22has_search%22%3Atrue%7D&parent=catalog&search_id=30018765" target="_blank">Explore and Create Reports with Looker Studio</a>
     <a href="https://www.cloudskillsboost.google/focuses/11988?catalog_rank=%7B%22rank%22%3A1%2C%22num_filters%22%3A0%2C%22has_search%22%3Atrue%7D&parent=catalog&search_id=30018771" target="_blank">Insights from Data with BigQuery: Challenge Lab</a>`,
    box2 : "popup1",
    image: "assets/images/skill-badge/sb7.png",
    video: {
      link: `<a href="https://youtu.be/jYA3VgynbKA?si=8IWvjjT2K7pMnDx1" target="_blank">Introduction to SQL for BigQuery and Cloud SQL</a>
      <a href="https://youtu.be/EE8I3FF1Dps?si=e-90ggFVIDBBIrT3" target="_blank">BigQuery: Qwik Start - Command Line</a>
      <a href="https://youtu.be/NvdS4S7y5rc?si=_wWDzxJK9sfwGWYB" target="_blank">Exploring Your Ecommerce Dataset with SQL in Google BigQuery</a>
      <a href="https://youtu.be/eEpCHDWMn0A?si=HMShyYHO7aeHBxnX" target="_blank">Troubleshooting Common SQL Errors with BigQuery</a>
      <a href="https://youtu.be/Pl6L_fRF9bg?si=gy_Tw0RonPDvy4B_" target="_blank">Explore and Create Reports with Looker Studio</a>
      <a href="https://youtu.be/a0RSFZ7jbfY?si=wg4inzalDl2Jn0Xc" target="_blank">Insights from Data with BigQuery: Challenge Lab</a>`
  },
  },


  // sb 8
  {
    title: "Cloud Functions: 3 Ways",
    click_1:"Skill badge Link",
    sb_link:"https://www.cloudskillsboost.google/course_templates/696",
    click_2:"Playlist Solution Link",
    yt_link:"https://www.youtube.com/playlist?list=PL5aOhqv5LVIohg7EKmBKewxSOoo4igEO_",
    credit: "4",
    labs:"4",
    box1: "absPopup1",
    lablink: `<a href="https://www.cloudskillsboost.google/focuses/1763?catalog_rank=%7B%22rank%22%3A1%2C%22num_filters%22%3A0%2C%22has_search%22%3Atrue%7D&parent=catalog&search_id=30018610" target="_blank">Cloud Functions: Qwik Start - Console</a>
     <a href="https://www.cloudskillsboost.google/focuses/916?catalog_rank=%7B%22rank%22%3A1%2C%22num_filters%22%3A0%2C%22has_search%22%3Atrue%7D&parent=catalog&search_id=30018727" target="_blank">Cloud Functions: Qwik Start - Command Line</a>
     <a href="https://www.cloudskillsboost.google/focuses/49757?catalog_rank=%7B%22rank%22%3A1%2C%22num_filters%22%3A0%2C%22has_search%22%3Atrue%7D&parent=catalog&search_id=30018780" target="_blank">Cloud Functions 2nd Gen: Qwik Start</a>
     <a href="https://www.cloudskillsboost.google/focuses/61974?catalog_rank=%7B%22rank%22%3A1%2C%22num_filters%22%3A0%2C%22has_search%22%3Atrue%7D&parent=catalog&search_id=30018782" target="_blank">Cloud Functions: 3 Ways: Challenge Lab</a>`,
    box2 : "popup1",
    image: "assets/images/skill-badge/sb8.png",
    video: {
      link: `<a href="https://youtu.be/TbX83VJIEKU?si=ri15HaXCVXfnjHLl" target="_blank">Cloud Functions: Qwik Start - Console</a>
      <a href="https://youtu.be/bTw9ZqQ3luA?si=gyb5IPlBQkktULY5" target="_blank">Cloud Functions: Qwik Start - Command Line</a>
      <a href="https://youtu.be/pblFJxObrUo?si=n7tzxxm8QNyxynu-" target="_blank">Cloud Functions 2nd Gen: Qwik Start</a>
      <a href="https://youtu.be/VLKTiskqGSE?si=uIFXsEBvRYevCEMR" target="_blank">Cloud Functions: 3 Ways: Challenge Lab</a>`
  },
  },


  // sb 9
  {
    title: "App Building with AppSheet",
    click_1:"Skill badge Link",
    sb_link:"https://www.cloudskillsboost.google/course_templates/635",
    click_2:"Playlist Solution Link",
    yt_link:"https://www.youtube.com/playlist?list=PL5aOhqv5LVIr_bwTDp8ylIvVNA1THfI9w_",
    credit: "0",
    labs:"4",
    box1: "absPopup1",
    lablink: `<a href="https://www.cloudskillsboost.google/focuses/19041?catalog_rank=%7B%22rank%22%3A1%2C%22num_filters%22%3A0%2C%22has_search%22%3Atrue%7D&parent=catalog&search_id=30032408" target="_blank">Google AppSheet: Getting Started</a>
     <a href="https://www.cloudskillsboost.google/focuses/20159?catalog_rank=%7B%22rank%22%3A1%2C%22num_filters%22%3A0%2C%22has_search%22%3Atrue%7D&parent=catalog&search_id=30032411" target="_blank">Connect and Configure Data for your AppSheet App</a>
     <a href="https://www.cloudskillsboost.google/focuses/32750?catalog_rank=%7B%22rank%22%3A1%2C%22num_filters%22%3A0%2C%22has_search%22%3Atrue%7D&parent=catalog&search_id=30032413" target="_blank">Publish your AppSheet App</a>
     <a href="https://www.cloudskillsboost.google/focuses/61472?catalog_rank=%7B%22rank%22%3A1%2C%22num_filters%22%3A0%2C%22has_search%22%3Atrue%7D&parent=catalog&search_id=30032422" target="_blank">App Building with AppSheet: Challenge Lab</a>`,
    box2 : "popup1",
    image: "assets/images/skill-badge/sb9.png",
    video: {
      link: `<a href="https://youtu.be/0nKsCxijzr0?si=cgTAjRyZsd2HoKLr" target="_blank">Google AppSheet: Getting Started</a>
      <a href="https://youtu.be/0nKsCxijzr0?si=dE2pk1XVIi5IE4cK" target="_blank">Connect and Configure Data for your AppSheet App</a>
      <a href="https://youtu.be/E2lyjO9SHTY?si=gKbGfC7hUI-FBa2w" target="_blank">Publish your AppSheet App</a>
      <a href="https://youtu.be/sSVzejuTUSY?si=SpuBbNuV73PO9x4D" target="_blank">App Building with AppSheet: Challenge Lab</a>`
  },
  },


  // sb 10
  {
    title: "Streaming Analytics into BigQuery",
    click_1:"Skill badge Link",
    sb_link:"https://www.cloudskillsboost.google/course_templates/752",
    click_2:"Playlist Solution Link",
    yt_link:"https://www.youtube.com/playlist?list=PL5aOhqv5LVIrJK4h-tRpfzfNPA9LQA9yo",
    credit: "2",
    labs:"4",
    box1: "absPopup1",
    lablink: `<a href="https://www.cloudskillsboost.google/focuses/3719?catalog_rank=%7B%22rank%22%3A1%2C%22num_filters%22%3A0%2C%22has_search%22%3Atrue%7D&parent=catalog&search_id=30018647" target="_blank">Pub/Sub: Qwik Start - Console</a>
     <a href="https://www.cloudskillsboost.google/focuses/1145?catalog_rank=%7B%22rank%22%3A1%2C%22num_filters%22%3A0%2C%22has_search%22%3Atrue%7D&parent=catalog&search_id=30032441" target="_blank">BigQuery: Qwik Start - Console</a>
     <a href="https://www.cloudskillsboost.google/focuses/1101?catalog_rank=%7B%22rank%22%3A1%2C%22num_filters%22%3A0%2C%22has_search%22%3Atrue%7D&parent=catalog&search_id=30032450" target="_blank">Dataflow: Qwik Start - Templates</a>
     <a href="https://www.cloudskillsboost.google/focuses/61948?catalog_rank=%7B%22rank%22%3A1%2C%22num_filters%22%3A0%2C%22has_search%22%3Atrue%7D&parent=catalog&search_id=30032457" target="_blank">Streaming Analytics into BigQuery: Challenge Lab</a>`,
    box2 : "popup1",
    image: "assets/images/skill-badge/sb10.png",
    video: {
      link: `<a href="https://youtu.be/w65dbHC98T8?si=goZDVgkB7I_1zMoG" target="_blank">Pub/Sub: Qwik Start - Console</a>
      <a href="https://youtu.be/3rNe9jRvEaY?si=7MGYGIlSBV6JV8Iq" target="_blank">BigQuery: Qwik Start - Console</a>
      <a href="https://youtu.be/Lbu0FiGCkjg?si=QmePJeGd7arcz4gN" target="_blank">Dataflow: Qwik Start - Templates</a>
      <a href="https://youtu.be/hLmx570Dm5Y?si=xkR4_dDrVhlFpT3Z" target="_blank">Streaming Analytics into BigQuery: Challenge Lab</a>`
  },
  },


  // sb 11
  {
    title: " Build and Optimize Data Warehouses with BigQuery",
    click_1:"Skill badge Link",
    sb_link:"https://www.cloudskillsboost.google/course_templates/624",
    click_2:"Playlist Solution Link",
    yt_link:"https://www.youtube.com/playlist?list=PL5aOhqv5LVIra2H1683KRBGunfYEcmn6E",
    credit: "25",
    labs:"5",
    box1: "absPopup1",
    lablink: `<a href="https://www.cloudskillsboost.google/focuses/3640?catalog_rank=%7B%22rank%22%3A1%2C%22num_filters%22%3A0%2C%22has_search%22%3Atrue%7D&parent=catalog&search_id=30032463" target="_blank">Creating a Data Warehouse Through Joins and Unions</a>
     <a href="https://www.cloudskillsboost.google/focuses/3694?catalog_rank=%7B%22rank%22%3A1%2C%22num_filters%22%3A0%2C%22has_search%22%3Atrue%7D&parent=catalog&search_id=30032467" target="_blank">Creating Date-Partitioned Tables in BigQuery</a>
     <a href="https://www.cloudskillsboost.google/focuses/3638?catalog_rank=%7B%22rank%22%3A1%2C%22num_filters%22%3A0%2C%22has_search%22%3Atrue%7D&parent=catalog&search_id=30032474" target="_blank">Troubleshooting and Solving Data Join Pitfalls</a>
     <a href="https://www.cloudskillsboost.google/focuses/3696?catalog_rank=%7B%22rank%22%3A1%2C%22num_filters%22%3A0%2C%22has_search%22%3Atrue%7D&parent=catalog&search_id=30032481" target="_blank">Working with JSON, Arrays, and Structs in BigQuery</a>
     <a href="https://www.cloudskillsboost.google/focuses/14341?catalog_rank=%7B%22rank%22%3A1%2C%22num_filters%22%3A0%2C%22has_search%22%3Atrue%7D&parent=catalog&search_id=30032486" target="_blank">Build and Optimize Data Warehouses with BigQuery: Challenge Lab</a>`,
    box2 : "popup1",
    image: "assets/images/skill-badge/sb11.png",
    video: {
      link: `<a href="https://youtu.be/q_MnMiPIyPk?si=7NEFYCZ8BfDQtUpt" target="_blank">Creating a Data Warehouse Through Joins and Unions</a>
      <a href="https://youtu.be/ERmQbkiOonk?si=ZhASjf9F1snnIFF3" target="_blank">Creating Date-Partitioned Tables in BigQuery</a>
      <a href="https://youtu.be/h1u2cRUD-d0?si=KJJs3_Hn-XvNV2VV" target="_blank">Troubleshooting and Solving Data Join Pitfalls</a>
      <a href="https://youtu.be/-s6bAjU0ieE?si=dYRjOCA95BKrUK86" target="_blank">Working with JSON, Arrays, and Structs in BigQuery</a>
      <a href="https://youtu.be/7XzpToSRSIk?si=xfRtAIUVsE1ZFxuB" target="_blank">Build and Optimize Data Warehouses with BigQuery: Challenge Lab</a>`
  },
  },


  //sb 12
  {
    title: "Prompt Design in Vertex AI",
    click_1:"Skill badge Link",
    sb_link:"https://www.cloudskillsboost.google/course_templates/976",
    click_2:"Playlist Solution Link",
    yt_link:"https://www.youtube.com/playlist?list=PL5aOhqv5LVIpGYa_pR6PYmUk2kwd60xWC",
    credit: "0",
    labs:"4",
    box1: "absPopup1",
    lablink: `<a href="https://www.cloudskillsboost.google/course_templates/976/labs/466368" target="_blank">Generative AI with Vertex AI: Prompt Design</a>
     <a href="https://www.cloudskillsboost.google/course_templates/976/labs/466369" target="_blank">Get Started with Vertex AI Studio</a>
     <a href="https://www.cloudskillsboost.google/course_templates/976/labs/466369" target="_blank">Getting Started with the Vertex AI Gemini API and Python SDK</a>
     <a href="https://www.cloudskillsboost.google/course_templates/976/labs/466371" target="_blank">Prompt Design in Vertex AI: Challenge Lab</a>`,
    box2 : "popup1",
    image: "assets/images/skill-badge/sb11.png",
    video: {
      link: `<a href="https://youtu.be/FE40dzAof3M" target="_blank">Generative AI with Vertex AI: Prompt Design</a>
       <a href="https://youtu.be/yFnteBaUwOM" target="_blank">Get Started with Vertex AI Studio</a>
       <a href="https://youtu.be/6DMza4gk-AM" target="_blank">Getting Started with the Vertex AI Gemini API and Python SDK</a>
       <a href="https://youtu.be/GZgFW6ZwEG4" target="_blank">Prompt Design in Vertex AI: Challenge Lab</a>`
  },
  },
  

   // sb 13
  {
    title: "Develop GenAI Apps with Gemini and Streamlit",
    click_1:"Skill badge Link",
    sb_link:"https://www.cloudskillsboost.google/course_templates/978",
    click_2:"Playlist Solution Link",
    yt_link:"https://www.youtube.com/playlist?list=PL5aOhqv5LVIoHIS0aHUyvppEPTPdAjFpv",
    credit: "20",
    labs:"5",
    box1: "absPopup1",
    lablink: `<a href="https://www.cloudskillsboost.google/course_templates/976/labs/466368" target="_blank">Getting Started with the Vertex AI Gemini API with cURL</a>
     <a href="https://www.cloudskillsboost.google/course_templates/976/labs/466369" target="_blank">Introduction to Function Calling with Gemini</a>
     <a href="https://www.cloudskillsboost.google/course_templates/976/labs/466369" target="_blank">Getting Started with the Vertex AI Gemini API and Python SDK</a>
     <a href="https://www.cloudskillsboost.google/course_templates/976/labs/466369" target="_blank">Deploy a Streamlit App Integrated with Gemini Pro on Cloud Run</a>
     <a href="https://www.cloudskillsboost.google/course_templates/976/labs/466371" target="_blank">Develop GenAI Apps with Gemini and Streamlit: Challenge Lab</a>`,
    box2 : "popup1",
    image: "assets/images/skill-badge/sb11.png",
    video: {
      link: `<a href="" target="_blank">Getting Started with the Vertex AI Gemini API with cURL</a>
      <a href="" target="_blank">Introduction to Function Calling with Gemini</a>
      <a href="" target="_blank">Getting Started with the Vertex AI Gemini API and Python SDK</a>
      <a href="" target="_blank">Deploy a Streamlit App Integrated with Gemini Pro on Cloud Run</a>
      <a href="" target="_blank">Develop GenAI Apps with Gemini and Streamlit: Challenge Lab</a>`
  },
  },


  // sb 14 
  {
    title: "Create ML Models with BigQuery MLt",
    click_1:"Skill badge Link",
    sb_link:"https://www.cloudskillsboost.google/course_templates/626",
    click_2:"Playlist Solution Link",
    yt_link:"https://www.youtube.com/playlist?list=PL5aOhqv5LVIoqlFjMOq8PywK-qQR_oc90",
    credit: "11",
    labs:"5",
    box1: "absPopup1",
    lablink: `<a href="https://www.cloudskillsboost.google/course_templates/626/labs/464873" target="_blank">Getting Started with BigQuery ML</a>
     <a href="https://www.cloudskillsboost.google/course_templates/626/labs/464874" target="_blank">Predict Visitor Purchases with a Classification Model in BigQuery ML</a>
     <a href="https://www.cloudskillsboost.google/course_templates/626/labs/464875" target="_blank">Predict Taxi Fare with a BigQuery ML Forecasting Model</a>
     <a href="https://www.cloudskillsboost.google/course_templates/626/labs/464876" target="_blank">Bracketology with Google Machine Learning</a>
     <a href="https://www.cloudskillsboost.google/course_templates/626/labs/464877" target="_blank">Create ML Models with BigQuery ML: Challenge Lab</a>`,
    box2 : "popup1",
    image: "assets/images/skill-badge/sb11.png",
    video: {
      link: `<a href="" target="_blank">Getting Started with BigQuery ML</a>
      <a href="" target="_blank">Predict Visitor Purchases with a Classification Model in BigQuery ML</a>
      <a href="" target="_blank">Predict Taxi Fare with a BigQuery ML Forecasting Model</a>
      <a href="" target="_blank">Bracketology with Google Machine Learning</a>
      <a href="" target="_blank">Create ML Models with BigQuery ML: Challenge Lab</a>`
  },
  },


  // sb 15
  {
    title: "Get Started with Dataplex",
    click_1:"Skill badge Link",
    sb_link:"https://www.cloudskillsboost.google/course_templates/726",
    click_2:"Playlist Solution Link",
    yt_link:"https://www.youtube.com/playlist?list=PL5aOhqv5LVIrUBEmeEYy3XLphGkjDVEm0",
    credit: "4",
    labs:"4",
    box1: "absPopup1",
    lablink: `<a href="https://www.cloudskillsboost.google/course_templates/726/labs/461568" target="_blank">Dataplex: Qwik Start - ConsoleL</a>
     <a href="https://www.cloudskillsboost.google/course_templates/726/labs/461569" target="_blank">Dataplex: Qwik Start - Command Line</a>
     <a href="https://www.cloudskillsboost.google/course_templates/726/labs/461570" target="_blank">Tagging Dataplex Assets</a>
     <a href="https://www.cloudskillsboost.google/course_templates/726/labs/461571" target="_blank">Get Started with Dataplex: Challenge Lab</a>`,
    box2 : "popup1",
    image: "assets/images/skill-badge/sb11.png",
    video: {
      link: `<a href="" target="_blank">Dataplex: Qwik Start - Console</a>
      <a href="" target="_blank">Dataplex: Qwik Start - Command Line</a>
      <a href="" target="_blank">Tagging Dataplex Assets</a>
      <a href="" target="_blank">Get Started with Dataplex: Challenge Lab</a>`
  },
  },

];
AOS.init();
const fillData = () => {
  let output = "";
  research.forEach(
    ({
      image,
      title,
      click_1,
      sb_link,
      click_2,
      yt_link,
      credit,
      labs,
      box2,
      video,
      box1,
      lablink,
    }) =>
      (output += `
        <tr data-aos="zoom-in-left">
          <td class="imgCol"><img src="${image}" class="rImg"></td>
          <td class="researchTitleName">
            <div class="img-div">
              <span class="imgResponsive">
                <img src="${image}" class="imgRes">
              </span>
            </div>
            <div id="sb-desp">
              <a href="${sb_link}" target="_blank" class="paperTitle"> ${title} </a>
              <div class="authors">
                <a href="${sb_link}" target="_blank" class="paperTitle_2">${click_1}</a>
              </div>
              <div class="rConferences">
                <a href="${yt_link}" target="_blank" class="paperTitle_2">${click_2}</a>
              </div>
              <div class="researchY">Credit Require: ${credit}</div>
              <div class="researchY">Total Labs in Skill Badge: ${labs}</div>


              <div class="d-flex" style="margin-right:5%;">
                <button class="button button-accent button-small text-right button-abstract" type="button" data-toggle="collapse" data-target="#${box1}" aria-expanded="false" aria-controls="${box1}">
                  Labs Links
                </button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button class="button button-accent button-small text-right button-abstract" type="button" data-toggle="collapse" data-target="#${box2}" aria-expanded="false" aria-controls="${box2}">
                  Labs Solution Link
                </button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </div>
              <div class=paperTitle_3>
              <div id="${box1}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                <div class="card-body">
                <h3>Lab Link</h3><h5>Click the text to go to the desired site. Don't worry, if the text get disapperst still the link works </h5>
                  <ul>
                    ${lablink.split('\n').map((bullet, index) => {
                      // Add link if it's the last bullet
                      if (index === lablink.split('\n').length - 1) {
                        return `<li><a href="#">${bullet}</a></li>`;
                      } else {
                        return `<li>${bullet}</li>`;
                      }
                    }).join('')}
                  </ul>
                </div>
              </div>
              <div id="${box2}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                <div class="card-body">
                <h3>Video Solution </h3><h5>Click the text to go to the desired site. Don't worry, if the text get disapperst still the link works </h5>
                <ul>
                ${video.link.split('\n').map((bullet, index) => {
                  // Add link if it's the last bullet
                  if (index === video.link.split('\n').length - 1) {
                    return `<li><a href="#">${bullet}</a></li>`;
                  } else {
                    return `<li>${bullet}</li>`;
                  }
                }).join('')}
             </ul>
                </div>
              </div>
            </div>
            </div>
          </td>
        </tr>
      `)
  );
  researchTable.innerHTML = output;
};

document.addEventListener("DOMContentLoaded", fillData);
