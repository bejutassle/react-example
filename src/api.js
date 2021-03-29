const newsData = {
    news: [
        {
            id: 1,
            title: '1. Haber Başlığı',
            content: '1. Haber İçeriği',
        },
        {
            id: 2,
            title: '2. Haber Başlığı',
            content: '2. Haber İçeriği',
        },
        {
            id: 3,
            title: '3. Haber Başlığı',
            content: '3. Haber İçeriği',
        },
    ],
    all: function() {
        return this.news;
    },
    get: function(id){
        const isNews = item => item.id === id;
        return this.news.find(isNews); 
    }
};

export default newsData;