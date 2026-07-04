const toggleSearch = () => {
    const searchForm = document.querySelector('.search-form');
    const searchButton = document.querySelector('.search-btn');
    const searchInput = document.querySelector('.search-input');
    //dùng query mà ko dùng ByClassName là lấy phần tử ĐẦU TIÊn còn ClassName là trả về toàn bộ phần tử nhó
    searchButton.addEventListener('click',/*này là arrow function em quen dùng có thể đổi thành
        funct bth nhe */  () => {//gọi sk nè
        searchForm.classList.toggle('active-search');//classList.func()
            //tog để bật/tắt cái class active trong css nè
        if (!searchForm.classList.contains('active-search')) {
            searchInput.value = '';
            searchInput.placeholder = '';
        }
        else{
            searchInput.placeholder = 'Nhìn giề nhập vào đê...';
            searchInput.focus();//tự động trỏ vào input mà ko cần bấm chuột vào
        }
        //nếu sau khi toggle đóng lại thì input sẽ xóa trắng 
    });

    searchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            searchInput.value = '';
            searchForm.classList.remove('active-search');
        }
    });
};

toggleSearch();