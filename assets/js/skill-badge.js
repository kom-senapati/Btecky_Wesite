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
    image: "assets/images/skill-badge/sb12.png",
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
    image: "assets/images/skill-badge/sb13.png",
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
    image: "assets/images/skill-badge/sb14.png",
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
    image: "assets/images/skill-badge/sb15.png",
    video: {
      link: `<a href="" target="_blank">Dataplex: Qwik Start - Console</a>
      <a href="" target="_blank">Dataplex: Qwik Start - Command Line</a>
      <a href="" target="_blank">Tagging Dataplex Assets</a>
      <a href="" target="_blank">Get Started with Dataplex: Challenge Lab</a>`
  },
  },


  // sb 16
  {
    title: "Analyze Sentiment with Natural Language API",
    click_1:"Skill badge Link",
    sb_link:"https://www.cloudskillsboost.google/course_templates/667",
    click_2:"Playlist Solution Link",
    yt_link:"https://www.youtube.com/playlist?list=PL5aOhqv5LVIqznKAxxW-BjIulfKx3EZOY",
    credit: "12",
    labs:"4",
    box1: "absPopup1",
    lablink: `<a href="" target="_blank">Cloud Natural Language API: Qwik Start</a>
     <a href="" target="_blank">Using the Natural Language API from Google Docs</a>
     <a href="" target="_blank">Entity and Sentiment Analysis with the Natural Language API</a>
     <a href="" target="_blank">Analyze Sentiment with Natural Language API: Challenge Lab</a>`,
    box2 : "popup1",
    image: "assets/images/skill-badge/sb16.png",
    video: {
      link: `<a href="" target="_blank">Cloud Natural Language API: Qwik Start</a>
      <a href="" target="_blank">Using the Natural Language API from Google Docs</a>
      <a href="" target="_blank">Entity and Sentiment Analysis with the Natural Language API</a>
      <a href="" target="_blank">Analyze Sentiment with Natural Language API: Challenge Lab</a>`
  },
  },


  // sb 17
  {
    title: "Cloud Speech API: 3 Ways",
    click_1:"Skill badge Link",
    sb_link:"https://www.cloudskillsboost.google/course_templates/700",
    click_2:"Playlist Solution Link",
    yt_link:"https://www.youtube.com/playlist?list=PL5aOhqv5LVIosXmhocAI0Eu76jnbpPRS2",
    credit: "4",
    labs:"4",
    box1: "absPopup1",
    lablink: `<a href="" target="_blank">It Speaks! Create Synthetic Speech Using Text-to-Speech</a>
     <a href="" target="_blank">Translate Text with the Cloud Translation API</a>
     <a href="" target="_blank">Translate Text with the Cloud Translation API</a>
     <a href="" target="_blank">Cloud Speech API 3 Ways: Challenge Lab</a>`,
    box2 : "popup1",
    image: "assets/images/skill-badge/sb17.png",
    video: {
      link: `<a href="" target="_blank">It Speaks! Create Synthetic Speech Using Text-to-Speech</a>
      <a href="" target="_blank">Translate Text with the Cloud Translation API</a>
      <a href="" target="_blank">Translate Text with the Cloud Translation API</a>
      <a href="" target="_blank">Cloud Speech API 3 Ways: Challenge Lab</a>`
  },
  },

  // sb 18
  {
    title: "Using the Google Cloud Speech API",
    click_1:"Skill badge Link",
    sb_link:"https://www.cloudskillsboost.google/course_templates/756",
    click_2:"Playlist Solution Link",
    yt_link:"https://www.youtube.com/playlist?list=PL5aOhqv5LVIoqFAuYlIL7y3QCLE5Knlik",
    credit: "4",
    labs:"4",
    box1: "absPopup1",
    lablink: `<a href="" target="_blank">Speech-to-Text API: Qwik Start</a>
     <a href="" target="_blank">Speaking with a Webpage - Streaming Speech Transcripts</a>
     <a href="" target="_blank">Speech to Text Transcription with the Cloud Speech API</a>
     <a href="" target="_blank">Using the Google Cloud Speech API: Challenge Lab</a>`,
    box2 : "popup1",
    image: "assets/images/skill-badge/sb18.png",
    video: {
      link: `<a href="" target="_blank">Speech-to-Text API: Qwik Start</a>
      <a href="" target="_blank">Speaking with a Webpage - Streaming Speech Transcripts</a>
      <a href="" target="_blank">Speech to Text Transcription with the Cloud Speech API</a>
      <a href="" target="_blank">Using the Google Cloud Speech API: Challenge Lab</a>`
  },
  },


  // sb 19
  {
    title: "Create and Manage Bigtable Instances",
    click_1:"Skill badge Link",
    sb_link:"https://www.cloudskillsboost.google/course_templates/756",
    click_2:"Playlist Solution Link",
    yt_link:"https://www.youtube.com/playlist?list=PL5aOhqv5LVIoqFAuYlIL7y3QCLE5Knlik",
    credit: "5",
    labs:"5",
    box1: "absPopup1",
    lablink: `<a href="" target="_blank">Designing and Querying Bigtable Schemas</a>
     <a href="" target="_blank">Creating and Populating a Bigtable Instance</a>
     <a href="" target="_blank">Streaming Data to Bigtable</a>
     <a href="" target="_blank">Monitoring and Managing Bigtable Health and Performance</a>
     <a href="" target="_blank">Create and Manage Bigtable Instances: Challenge Lab</a>`,
    box2 : "popup1",
    image: "assets/images/skill-badge/sb19.png",
    video: {
      link: `<a href="" target="_blank">Designing and Querying Bigtable Schemas</a>
      <a href="" target="_blank">Creating and Populating a Bigtable Instance</a>
      <a href="" target="_blank">Streaming Data to Bigtable</a>
      <a href="" target="_blank">Monitoring and Managing Bigtable Health and Performance</a>
      <a href="" target="_blank">Create and Manage Bigtable Instances: Challenge Lab</a>`
  },
  },


  // sb 20
  {
    title: "Manage Data Models in Looker",
    click_1:"Skill badge Link",
    sb_link:"https://www.cloudskillsboost.google/course_templates/756",
    click_2:"Playlist Solution Link",
    yt_link:"https://www.youtube.com/playlist?list=PL5aOhqv5LVIqmfqQwAcWTQVq3UYx-lQz-",
    credit: "0",
    labs:"6",
    box1: "absPopup1",
    lablink: `<a href="" target="_blank">Modularizing LookML Code with Extends</a>
     <a href="" target="_blank">Troubleshooting Data Models in Looker</a>
     <a href="" target="_blank">Employing Best Practices for Improving the Usability of LookML Projects</a>
     <a href="" target="_blank">Caching and Datagroups with LookML</a>
     <a href="" target="_blank">Optimizing Performance of LookML Queries</a>
     <a href="" target="_blank">Manage Data Models in Looker: Challenge Lab</a>`,
    box2 : "popup1",
    image: "assets/images/skill-badge/sb20.png",
    video: {
      link: `<a href="" target="_blank">Designing and Querying Bigtable Schemas</a>
      <a href="" target="_blank">Creating and Populating a Bigtable Instance</a>
      <a href="" target="_blank">Streaming Data to Bigtable</a>
      <a href="" target="_blank">Monitoring and Managing Bigtable Health and Performance</a>
      <a href="" target="_blank">Create and Manage Bigtable Instances: Challenge Lab</a>`
  },
  },



  // sb 21
  {
    title: "Manage Bigtable on Google Cloud",
    click_1:"Skill badge Link",
    sb_link:"https://www.cloudskillsboost.google/course_templates/650",
    click_2:"Playlist Solution Link",
    yt_link:"https://www.youtube.com/playlist?list=PL5aOhqv5LVIoYv63IhrYVf1uddh_xGK2_",
    credit: "5",
    labs:"5",
    box1: "absPopup1",
    lablink: `<a href="" target="_blank">Designing and Querying Bigtable Schemas</a>
     <a href="" target="_blank">Creating and Populating a Bigtable Instance</a>
     <a href="" target="_blank">Streaming Data to Bigtable</a>
     <a href="" target="_blank">Monitoring and Managing Bigtable Health and Performance</a>
     <a href="" target="_blank">Create and Manage Bigtable Instances: Challenge Lab</a>`,
    box2 : "popup1",
    image: "assets/images/skill-badge/sb21.png",
    video: {
      link: `<a href="" target="_blank">Designing and Querying Bigtable Schemas</a>
     <a href="" target="_blank">Creating and Populating a Bigtable Instance</a>
     <a href="" target="_blank">Streaming Data to Bigtable</a>
     <a href="" target="_blank">Monitoring and Managing Bigtable Health and Performance</a>
     <a href="" target="_blank">Create and Manage Bigtable Instances: Challenge Lab</a>`
  },
  },



  // sb 22
  {
    title: "Use APIs to Work with Cloud Storage",
    click_1:"Skill badge Link",
    sb_link:"https://www.cloudskillsboost.google/course_templates/755",
    click_2:"Playlist Solution Link",
    yt_link:"https://www.youtube.com/playlist?list=PL5aOhqv5LVIoZgnZGo9rnLmR0koWktUgg",
    credit: "4",
    labs:"4",
    box1: "absPopup1",
    lablink: `<a href="" target="_blank">Cloud Storage: Qwik Start - CLI/SDK</a>
     <a href="" target="_blank">APIs Explorer: Cloud Storage</a>
     <a href="" target="_blank">Introduction to APIs in Google Cloud</a>
     <a href="" target="_blank">Use APIs to Work with Cloud Storage: Challenge Lab</a>`,
    box2 : "popup1",
    image: "assets/images/skill-badge/sb22.png",
    video: {
      link: `<a href="" target="_blank">Cloud Storage: Qwik Start - CLI/SDK</a>
     <a href="" target="_blank">APIs Explorer: Cloud Storage</a>
     <a href="" target="_blank">Introduction to APIs in Google Cloud</a>
     <a href="" target="_blank">Use APIs to Work with Cloud Storage: Challenge Lab</a>`
  },
  },



  // sb 23
  {
    title: "Manage Kubernetes in Google Cloud",
    click_1:"Skill badge Link",
    sb_link:"https://www.cloudskillsboost.google/course_templates/783",
    click_2:"Playlist Solution Link",
    yt_link:"https://www.youtube.com/playlist?list=PL5aOhqv5LVIriudq_grulCQbMGmNRkTj0",
    credit: "16",
    labs:"4",
    box1: "absPopup1",
    lablink: `<a href="" target="_blank">Managing Deployments Using Kubernetes Engine</a>
     <a href="" target="_blank">Debugging Apps on Google Kubernetes Engine</a>
     <a href="" target="_blank">Collect Metrics from Exporters using the Managed Service for Prometheus</a>
     <a href="" target="_blank">Manage Kubernetes in Google Cloud: Challenge Lab</a>`,
    box2 : "popup1",
    image: "assets/images/skill-badge/sb23.png",
    video: {
      link: `<a href="" target="_blank">Managing Deployments Using Kubernetes Engine</a>
     <a href="" target="_blank">Debugging Apps on Google Kubernetes Engine</a>
     <a href="" target="_blank">Collect Metrics from Exporters using the Managed Service for Prometheus</a>
     <a href="" target="_blank">Manage Kubernetes in Google Cloud: Challenge Lab</a>`
  },
  },



  // sb 24
  {
    title: "Analyze Images with the Cloud Vision API",
    click_1:"Skill badge Link",
    sb_link:"https://www.cloudskillsboost.google/course_templates/633",
    click_2:"Playlist Solution Link",
    yt_link:"https://www.youtube.com/playlist?list=PL5aOhqv5LVIojH3bZBGU0VhgsRWySH4hk",
    credit: "12",
    labs:"4",
    box1: "absPopup1",
    lablink: `<a href="" target="_blank">APIs Explorer: Qwik Start</a>
     <a href="" target="_blank">Extract, Analyze, and Translate Text from Images with the Cloud ML APIs</a>
     <a href="" target="_blank">Detect Labels, Faces, and Landmarks in Images with the Cloud Vision API</a>
     <a href="" target="_blank">Analyze Images with the Cloud Vision API: Challenge Lab</a>`,
    box2 : "popup1",
    image: "assets/images/skill-badge/sb24.png",
    video: {
      link: `<a href="" target="_blank">APIs Explorer: Qwik Start</a>
     <a href="" target="_blank">Extract, Analyze, and Translate Text from Images with the Cloud ML APIs</a>
     <a href="" target="_blank">Detect Labels, Faces, and Landmarks in Images with the Cloud Vision API</a>
     <a href="" target="_blank">Analyze Images with the Cloud Vision API: Challenge Lab</a>`
  },
  },



  // sb 25
  {
    title: "The Basics of Google Cloud Compute",
    click_1:"Skill badge Link",
    sb_link:"https://www.cloudskillsboost.google/course_templates/754",
    click_2:"Playlist Solution Link",
    yt_link:"https://www.youtube.com/playlist?list=PL5aOhqv5LVIo5s0VdRt26abOYUXzf6rG9",
    credit: "4",
    labs:"4",
    box1: "absPopup1",
    lablink: `<a href="" target="_blank">Creating a Virtual Machine</a>
     <a href="" target="_blank">Creating a Persistent Disk</a>
     <a href="" target="_blank">Hosting a Web App on Google Cloud Using Compute Engine</a>
     <a href="" target="_blank">The Basics of Google Cloud Compute: Challenge Lab</a>`,
    box2 : "popup1",
    image: "assets/images/skill-badge/sb25.png",
    video: {
      link: `<a href="" target="_blank">Creating a Virtual Machine</a>
     <a href="" target="_blank">Creating a Persistent Disk</a>
     <a href="" target="_blank">Hosting a Web App on Google Cloud Using Compute Engine</a>
     <a href="" target="_blank">The Basics of Google Cloud Compute: Challenge Lab</a>`
  },
  },



  // sb 26
  {
    title: "Networking Fundamentals on Google Cloud",
    click_1:"Skill badge Link",
    sb_link:"https://www.cloudskillsboost.google/course_templates/748",
    click_2:"Playlist Solution Link",
    yt_link:"https://www.youtube.com/playlist?list=PL5aOhqv5LVIo5_RRF-MGQOthCJ8cNw6i8",
    credit: "4",
    labs:"4",
    box1: "absPopup1",
    lablink: `<a href="" target="_blank">VPC Networking Fundamentals</a>
     <a href="" target="_blank">Set Up Network and HTTP Load Balancers</a>
     <a href="" target="_blank">Internal Load Balancer</a>
     <a href="" target="_blank">Networking Fundamentals on Google Cloud: Challenge Lab
</a>`,
    box2 : "popup1",
    image: "assets/images/skill-badge/sb26.png",
    video: {
      link: `<a href="" target="_blank">VPC Networking Fundamentals</a>
     <a href="" target="_blank">Set Up Network and HTTP Load Balancers</a>
     <a href="" target="_blank">Internal Load Balancer</a>
     <a href="" target="_blank">Networking Fundamentals on Google Cloud: Challenge Lab
</a>`
  },
  },



  // sb 27
  {
    title: "Protect Sensitive Data with Data Loss Prevention",
    click_1:"Skill badge Link",
    sb_link:"https://www.cloudskillsboost.google/course_templates/750",
    click_2:"Playlist Solution Link",
    yt_link:"https://www.youtube.com/playlist?list=PL5aOhqv5LVIpXN08hN9yBxuK6GrAbDnqM",
    credit: "4",
    labs:"4",
    box1: "absPopup1",
    lablink: `<a href="" target="_blank">Data Loss Prevention: Qwik Start - JSON</a>
     <a href="" target="_blank">Redacting Sensitive Data with Cloud Data Loss Prevention</a>
     <a href="" target="_blank">Creating a De-identified Copy of Data in Cloud Storage</a>
     <a href="" target="_blank">Protect Sensitive Data with Data Loss Prevention: Challenge Lab</a>`,
    box2 : "popup1",
    image: "assets/images/skill-badge/sb27.png",
    video: {
      link: `<a href="" target="_blank">Data Loss Prevention: Qwik Start - JSON</a>
     <a href="" target="_blank">Redacting Sensitive Data with Cloud Data Loss Prevention</a>
     <a href="" target="_blank">Creating a De-identified Copy of Data in Cloud Storage</a>
     <a href="" target="_blank">Protect Sensitive Data with Data Loss Prevention: Challenge Lab</a>`
  },
  },


  // sb 28
  {
    title: "Monitoring in Google Cloud",
    click_1:"Skill badge Link",
    sb_link:"https://www.cloudskillsboost.google/course_templates/747",
    click_2:"Playlist Solution Link",
    yt_link:"https://www.youtube.com/playlist?list=PL5aOhqv5LVIpwwNxT5WqtP6xY7DBfP8aX",
    credit: "4",
    labs:"4",
    box1: "absPopup1",
    lablink: `<a href="" target="_blank">Cloud Monitoring: Qwik Start</a>
     <a href="" target="_blank">Monitoring and Logging for Cloud Functions</a>
     <a href="" target="_blank">Monitor a Compute Engine Virtual Machine: Qwik Start</a>
     <a href="" target="_blank">Monitoring in Google Cloud: Challenge Lab</a>`,
    box2 : "popup1",
    image: "assets/images/skill-badge/sb27.png",
    video: {
      link: `<a href="" target="_blank">Cloud Monitoring: Qwik Start</a>
     <a href="" target="_blank">Monitoring and Logging for Cloud Functions</a>
     <a href="" target="_blank">Monitor a Compute Engine Virtual Machine: Qwik Start</a>
     <a href="" target="_blank">Monitoring in Google Cloud: Challenge Lab</a>`
  },
  },

  // sb 29
  {
    title: "Secure BigLake Data",
    click_1:"Skill badge Link",
    sb_link:"https://www.cloudskillsboost.google/course_templates/751",
    click_2:"Playlist Solution Link",
    yt_link:"https://www.youtube.com/playlist?list=PL5aOhqv5LVIqiKFM79QB7CYxSEoE7FK_q",
    credit: "4",
    labs:"4",
    box1: "absPopup1",
    lablink: `<a href="" target="_blank">Cloud IAM: Qwik Start</a>
     <a href="" target="_blank">Data Catalog: Qwik Start</a>
     <a href="" target="_blank">BigLake: Qwik Start</a>
     <a href="" target="_blank">Secure BigLake Data: Challenge Lab</a>`,
    box2 : "popup1",
    image: "assets/images/skill-badge/sb29.png",
    video: {
      link: `<a href="" target="_blank">Cloud IAM: Qwik Start</a>
     <a href="" target="_blank">Data Catalog: Qwik Start</a>
     <a href="" target="_blank">BigLake: Qwik Start</a>
     <a href="" target="_blank">Secure BigLake Data: Challenge Lab</a>`
  },
  },


  // sb 30
  {
    title: "Analyze Speech and Language with Google APIs",
    click_1:"Skill badge Link",
    sb_link:"https://www.cloudskillsboost.google/course_templates/634",
    click_2:"Playlist Solution Link",
    yt_link:"https://www.youtube.com/playlist?list=PL5aOhqv5LVIrv8gr5EY0jVmILgbxoWoMU",
    credit: "3",
    labs:"4",
    box1: "absPopup1",
    lablink: `<a href="" target="_blank">Cloud Natural Language API: Qwik Start</a>
     <a href="" target="_blank">Speech-to-Text API: Qwik Start</a>
     <a href="" target="_blank">Entity and Sentiment Analysis with the Natural Language API</a>
     <a href="" target="_blank">Analyze Speech & Language with Google APIs: Challenge Lab</a>`,
    box2 : "popup1",
    image: "assets/images/skill-badge/sb30.png",
    video: {
      link: `<a href="" target="_blank">Cloud Natural Language API: Qwik Start</a>
     <a href="" target="_blank">Speech-to-Text API: Qwik Start</a>
     <a href="" target="_blank">Entity and Sentiment Analysis with the Natural Language API</a>
     <a href="" target="_blank">Analyze Speech & Language with Google APIs: Challenge Lab</a>`
  },
  },



  // sb 31
  {
    title: "Create a Secure Data Lake on Cloud Storage",
    click_1:"Skill badge Link",
    sb_link:"https://www.cloudskillsboost.google/course_templates/704",
    click_2:"Playlist Solution Link",
    yt_link:"https://www.youtube.com/playlist?list=PL5aOhqv5LVIoVxULKNT9feDGuk5oHssAr",
    credit: "4",
    labs:"4",
    box1: "absPopup1",
    lablink: `<a href="" target="_blank">Cloud IAM: Qwik Start</a>
     <a href="" target="_blank">Cloud Storage: Qwik Start - Cloud Console</a>
     <a href="" target="_blank">Dataplex: Qwik Start - Console</a>
     <a href="" target="_blank">Create a Secure Data Lake on Cloud Storage: Challenge Lab</a>`,
    box2 : "popup1",
    image: "assets/images/skill-badge/sb31.png",
    video: {
      link: `<a href="" target="_blank">Cloud IAM: Qwik Start</a>
     <a href="" target="_blank">Cloud Storage: Qwik Start - Cloud Console</a>
     <a href="" target="_blank">Dataplex: Qwik Start - Console</a>
     <a href="" target="_blank">Create a Secure Data Lake on Cloud Storage: Challenge Lab</a>`
  },
  },



  // sb 32
  {
    title: "Manage Data Models in Looker",
    click_1:"Skill badge Link",
    sb_link:"https://www.cloudskillsboost.google/course_templates/753",
    click_2:"Playlist Solution Link",
    yt_link:"https://www.youtube.com/playlist?list=PL5aOhqv5LVIpxoTWts0wG2TCfaH9tc6eA",
    credit: "3",
    labs:"4",
    box1: "absPopup1",
    lablink: `<a href="" target="_blank">BigQuery: Qwik Start - Console</a>
     <a href="" target="_blank">Data Catalog: Qwik Start</a>
     <a href="" target="_blank">BigLake: Qwik Start</a>
     <a href="" target="_blank">Tag and Discover BigLake Data: Challenge Lab</a>`,
    box2 : "popup1",
    image: "assets/images/skill-badge/sb32.png",
    video: {
      link: `<a href="" target="_blank">BigQuery: Qwik Start - Console</a>
     <a href="" target="_blank">Data Catalog: Qwik Start</a>
     <a href="" target="_blank">BigLake: Qwik Start</a>
     <a href="" target="_blank">Tag and Discover BigLake Data: Challenge Lab</a>`
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




const experiencecards = document.querySelector(".about_skillbadge-cards");
const exp = [
  {
    title: "<b>Level Up Your Cloud Game: The Ultimate Google Cloud Skill Badge Destination!</b>",
    desp: "Welcome to your one-stop shop for conquering the Google Cloud Arcade and becoming a cloud champion! Here, you'll find a treasure trove of amazing Google Cloud Skill Badges, meticulously curated to propel you towards cloud mastery.<br>But we go beyond just badges! We understand that the true path to expertise lies in practical application. That's why, alongside each badge, you'll discover a treasure chest of resources to fuel your arcade journey:",
    desp2: "<b>Comprehensive Solutions:</b> Dive deep into expertly crafted solutions hosted on GitHub. These gems provide clear, step-by-step guidance, ensuring you not only conquer the badge challenges but also solidify your understanding.<br>",
    desp3: "<b>Invaluable Resources:</b> Unearth a wealth of supplementary materials, including tutorials, documentation, and community discussions. These resources offer additional insights and perspectives to enrich your learning experience.",
  },
    {
    title: "<b>Why Choose Us?</b>",
    desp: "<b>Badges Galore:</b>Explore a vast collection of Google Cloud Skill Badges, categorized to suit your specific needs and skill level. Whether you're a cloud novice or a seasoned pro, we have the perfect badge to challenge and empower you.",
    desp2: "<b>Beyond the Badge: </b>We don't just point you towards badges; we equip you for success. With our solutions and resources, you'll gain the practical skills and knowledge to put your cloud expertise into action. ",
    desp3: "<b>Become a Cloud Master:</b>Our comprehensive approach to badge exploration empowers you to graduate from the arcade as a Google Cloud pro, ready to tackle any cloud challenge with confidence.",
  },
    {
    title: "<b>Ready to Level Up?</b>",
    desp: "Join our thriving community of cloud enthusiasts and embark on your Google Cloud Arcade adventure today! With our curated badges, insightful solutions, and valuable resources, you'll transform badge-winning into a transformative learning experience.",
    desp2: "<b>BLet the Games Begin!</b>",
    desp3: "",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, desp , desp2 , desp3}) =>
      (output += `        
        <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
          <div class="card card1">
            <article class="card-body">
              <header>
                <div class="title">
                  <h3>${title}</h3>
                </div>
            <ol>
            <div class="desptext_1">
              ${desp}
            </div>
            </ol>
            <ol>
            <div class="desptext_1">
              ${desp2}
            </div>
            </ol>
            <ol>
            <div class="desptext_1">
              ${desp3}
            </div>
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

