const loadAllNews = async()=>{
    const url = 'https://openapi.programming-hero.com/api/news/categories';
    const res = await fetch(url);
    const data = await res.json();
    displayAllNews(data.data.news_category);
};

const displayAllNews = categories=>{
    const newsCategoryContainer = document.getElementById('news-category-container');
    categories.forEach(category=>{
        const newsCategoryDiv = document.createElement('div');
        newsCategoryDiv.classList.add('col');
        newsCategoryDiv.innerHTML=`
        <a onclick="loadAllNewsId('${category.category_id}')" class="text-decoration-none" href="#">${category.category_name}</a>
       
        `;
        newsCategoryContainer.appendChild(newsCategoryDiv);

       
    })
};
const loadAllNewsId = (id)=>{
    toggleSpinner(true);
    const url = `https://openapi.programming-hero.com/api/news/category/${id}`;
    fetch(url)
    .then(res=>res.json())
    .then(data=>myfunction(data.data));
    

};
const myfunction = elements=>{
    const newCardContainer = document.getElementById('news-card-container');
    newCardContainer.innerHTML=''

    const noNews = document.getElementById('no-news');
    if (elements.length===0){
      noNews.classList.remove('d-none')
    }
    else{
      noNews.classList.add('d-none')
    }

    elements.forEach(element=>{
        const newCardDiv = document.createElement('div');
        newCardDiv.classList.add('row');
        
        
        newCardDiv.innerHTML=`
        <div class="card mb-3" >
                    <div class="row g-0">
                      <div class="col-md-4">
                        <img src="${element.thumbnail_url}" class="img-fluid rounded-start" alt="...">
                      </div>
                      <div class="col-md-8">
                        <div class="card-body">
                          <h5 class="card-title">${element.title}</h5>
                          <p class="card-text">${element.details}</p>
                          

                          <nav class="navbar ">
                            <div class="container">
                                <a class="navbar-brand" href="#">
                                 <img src="${element.author.img}" alt="" width="30" height="24"> <span class="fw-bold">${element.author?element.author.name:'Not Available'}</span> <span class="fw-bold ms-5 ps-5 text-center">Views: ${element.total_view}</span>
                                 </a>
                                 
  </div>
</nav>
                        </div>
                      </div>
                    </div>
                  </div>
        
        `;
        newCardContainer.appendChild(newCardDiv);

        
    });
    toggleSpinner(false);
};

const toggleSpinner = isLoading=>{
  const loader = document.getElementById('loader');
  if(isLoading){
    loader.classList.remove('d-none');
  }
  else{
    loader.classList.add('d-none');
  }
}
loadAllNews();