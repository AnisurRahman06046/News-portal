const loadAllCategoryNews = ()=>{
    const url = 'https://openapi.programming-hero.com/api/news/categories';
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayAllNews(data.data.news_category))
    
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

        // console.log(category)
    })
};
const loadAllNewsId = (id)=>{
    // const url = `https://openapi.programming-hero.com/api/news/category/${id}`;
    // fetch(url)
    // .then(res=>res.json())
    // .then(data=>console.log(data));
    displayNews('get id',id)

};
const displayNews = (news_arr,news_id)=>{
    console.log(news_id)
}
loadAllCategoryNews();
// console.log('linked')