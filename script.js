// 菜单数据源
const recipeData = [
    { name: "土豆片炒肉", ingredients: ["土豆", "猪肉", "生姜", "生抽"], type: "meat", isFav: true, isSour: false, icon: "🥔" },
    { name: "胡萝卜炒肉丝", ingredients: ["胡萝卜", "猪肉", "生姜", "青椒"], type: "meat", isFav: true, isSour: false, icon: "🥕" },
    { name: "土豆胡萝卜炖牛腩", ingredients: ["牛腩", "土豆", "胡萝卜", "八角", "姜"], type: "meat", isFav: true, isSour: false, icon: "🥘" },
    { name: "定制抓饭(无洋葱版)", ingredients: ["羊排", "巨量胡萝卜", "孜然", "大米"], type: "meat", isFav: true, isSour: false, icon: "🍚" },
    { name: "土豆肉丁焖饭", ingredients: ["土豆丁", "五花肉丁", "生姜", "大米"], type: "meat", isFav: true, isSour: false, icon: "🍱" },
    { name: "胡萝卜排骨汤", ingredients: ["排骨", "胡萝卜", "玉米", "姜片"], type: "meat", isFav: true, isSour: false, icon: "🥣" },
    { name: "鸡蛋胡萝卜炒饭", ingredients: ["大米", "鸡蛋", "胡萝卜丁", "香菜末"], type: "veg", isFav: true, isSour: false, icon: "🍳" },
    { name: "照烧土豆排骨", ingredients: ["排骨", "土豆", "蜂蜜", "生抽"], type: "meat", isFav: true, isSour: false, icon: "🍖" },
    { name: "胡萝卜炒鸡蛋", ingredients: ["胡萝卜", "鸡蛋", "盐"], type: "veg", isFav: true, isSour: false, icon: "🥚" },
    { name: "肉末毛豆", ingredients: ["毛豆", "肉末", "生姜", "生抽"], type: "meat", isFav: false, isSour: false, icon: "🌱" },
    { name: "姜汁蒸豆腐", ingredients: ["嫩豆腐", "肉末", "生姜", "香油"], type: "meat", isFav: false, isSour: false, icon: "⬜" },
    { name: "毛豆炒豆干", ingredients: ["毛豆", "香干", "红椒丝", "姜"], type: "veg", isFav: false, isSour: false, icon: "🥢" },
    { name: "脆皮煎豆腐", ingredients: ["老豆腐", "椒盐", "五香粉"], type: "veg", isFav: false, isSour: false, icon: "🍱" },
    { name: "咸蛋黄焗豆腐", ingredients: ["豆腐", "咸蛋黄", "生粉"], type: "veg", isFav: false, isSour: false, icon: "✨" },
    { name: "毛豆炖鸡块", ingredients: ["鸡腿肉", "毛豆", "姜", "生抽"], type: "meat", isFav: false, isSour: false, icon: "🍗" },
    { name: "家常红烧豆腐", ingredients: ["豆腐", "木耳", "胡萝卜", "姜"], type: "veg", isFav: false, isSour: false, icon: "🥘" },
    { name: "板栗烧鸡", ingredients: ["鸡肉", "板栗", "生姜", "冰糖"], type: "meat", isFav: false, isSour: false, icon: "🌰" },
    { name: "孜然牛肉", ingredients: ["牛肉", "孜然粉", "香菜", "干辣椒"], type: "meat", isFav: false, isSour: false, icon: "🥩" },
    { name: "红烧肉(姜片版)", ingredients: ["五花肉", "姜片", "八角", "桂皮"], type: "meat", isFav: false, isSour: false, icon: "🥓" },
    { name: "盐水鸭", ingredients: ["鸭肉", "花椒", "盐", "姜"], type: "meat", isFav: false, isSour: false, icon: "🦆" },
    { name: "冬瓜炖排骨", ingredients: ["排骨", "冬瓜", "姜片", "白胡椒"], type: "meat", isFav: false, isSour: false, icon: "🍲" },
    { name: "滑鸡片炒芹菜", ingredients: ["鸡胸肉", "芹菜", "姜丝"], type: "meat", isFav: false, isSour: false, icon: "🎋" },
    { name: "蜜汁叉烧", ingredients: ["梅花肉", "叉烧酱", "蜂蜜", "姜汁"], type: "meat", isFav: false, isSour: false, icon: "🍯" },
    { name: "咸肉菜饭", ingredients: ["大米", "咸肉", "上海青", "姜末"], type: "meat", isFav: false, isSour: false, icon: "🍚" },
    { name: "鸡蛋番茄汤面", ingredients: ["面条", "西红柿", "鸡蛋", "香菜"], type: "veg", isFav: false, isSour: true, icon: "🍜" },
    { name: "生炒牛肉饭", ingredients: ["大米", "牛肉末", "生姜", "生菜丝"], type: "meat", isFav: false, isSour: false, icon: "🍛" },
    { name: "三鲜素饺子", ingredients: ["芹菜(平替)", "鸡蛋", "木耳"], type: "veg", isFav: false, isSour: false, icon: "🥟" },
    { name: "干锅土豆片(无蒜版)", ingredients: ["土豆", "腊肉", "干辣椒", "姜片"], type: "meat", isFav: false, isSour: false, icon: "🔥" },
    { name: "糖醋里脊", ingredients: ["里脊肉", "番茄酱", "白糖", "白醋"], type: "meat", isFav: false, isSour: true, icon: "🍖" },
    { name: "酸萝卜老鸭汤", ingredients: ["鸭肉", "酸萝卜", "姜", "花椒"], type: "meat", isFav: false, isSour: true, icon: "🥣" },
    { name: "番茄炖牛腩", ingredients: ["牛腩", "西红柿", "姜", "冰糖"], type: "meat", isFav: false, isSour: true, icon: "🍅" },
    { name: "醋溜白菜", ingredients: ["大白菜", "陈醋", "干辣椒", "姜丝"], type: "veg", isFav: false, isSour: true, icon: "🥬" },
    { name: "荷兰豆炒腊肉", ingredients: ["荷兰豆", "腊肉", "生姜"], type: "meat", isFav: false, isSour: false, icon: "🤝" },
    { name: "上汤娃娃菜", ingredients: ["娃娃菜", "皮蛋", "咸蛋", "生姜"], type: "veg", isFav: false, isSour: false, icon: "🥬" },
    { name: "西葫芦炒鸡蛋", ingredients: ["西葫芦", "鸡蛋", "姜末"], type: "veg", isFav: false, isSour: false, icon: "🥒" },
    { name: "手撕包菜(椒盐版)", ingredients: ["包菜", "干辣椒", "花椒油"], type: "veg", isFav: false, isSour: false, icon: "🥗" },
    { name: "山药炒木耳", ingredients: ["山药", "木耳", "胡萝卜丝"], type: "veg", isFav: true, isSour: false, icon: "⚪" },
    { name: "菠萝咕咾肉", ingredients: ["猪肉", "菠萝", "青椒", "甜辣酱"], type: "meat", isFav: false, isSour: true, icon: "🍍" },
    { name: "蚝油生菜", ingredients: ["生菜", "蚝油", "姜末"], type: "veg", isFav: false, isSour: false, icon: "🥬" },
    { name: "肉末蒸蛋", ingredients: ["鸡蛋", "肉末", "生抽", "香油"], type: "meat", isFav: false, isSour: false, icon: "🍮" },
    { name: "香菇炖鸡汤", ingredients: ["鸡肉", "干香菇", "姜", "红枣"], type: "meat", isFav: false, isSour: false, icon: "🍲" },
    { name: "白灼菜心", ingredients: ["菜心", "生姜丝",], type: "veg", isFav: false, isSour: false, icon: "🥦" },
    { name: "南瓜蒸排骨", ingredients: ["排骨", "南瓜", "豆豉(无蒜)", "姜"], type: "meat", isFav: false, isSour: false, icon: "🎃" },
    { name: "玉米排骨汤", ingredients: ["排骨", "玉米", "胡萝卜", "姜"], type: "meat", isFav: true, isSour: false, icon: "🌽" },
];

// DOM 元素获取
const grid = document.getElementById('menu-grid');
const searchBar = document.getElementById('search-bar');
const tags = document.querySelectorAll('.tag');
const overlay = document.getElementById('modal-overlay');

/**
 * 渲染菜单列表
 */
function displayRecipes(list) {
    grid.innerHTML = '';
    list.forEach(item => {
        const card = document.createElement('div');
        card.className = 'recipe-card';
        card.innerHTML = `
            <div class="card-img">${item.icon}</div>
            <div class="card-info">
                ${item.isFav ? `<span class="fav-badge">❤️ 偏好食材</span>` : ''}
                <h3>${item.name}</h3>
                <p style="color:#718096; font-size:0.9rem">配料: ${item.ingredients.join('、')}</p>
            </div>
        `;
        grid.appendChild(card);
    });
}

/**
 * 过滤搜索逻辑
 */
function filterList() {
    const searchTerm = searchBar.value.toLowerCase();
    const activeType = document.querySelector('.tag.active').dataset.type;
    const filtered = recipeData.filter(item => {
        const matchesSearch = item.name.includes(searchTerm) || item.ingredients.some(i => i.includes(searchTerm));
        
        // 分类逻辑
        if (activeType === 'all') return matchesSearch;
        if (activeType === 'fav') return matchesSearch && item.isFav;
        return matchesSearch && item.type === activeType;
    });
    displayRecipes(filtered);
}

/**
 * 显示随机推荐弹窗
 */
function showResult(recipe) {
    document.getElementById('res-icon').innerText = recipe.icon;
    document.getElementById('res-name').innerText = recipe.name;
    document.getElementById('res-list').innerText = recipe.ingredients.join('、');
    overlay.classList.add('active');
}

// --- 事件监听 ---

// 随机点餐点击
document.getElementById('random-pick').addEventListener('click', () => {
    let pool = [];
    recipeData.forEach(r => {
        pool.push(r);
        if (r.isFav) pool.push(r, r); // 喜欢吃的加权重
    });
    const result = pool[Math.floor(Math.random() * pool.length)];
    showResult(result);
});

// 搜索输入监听
searchBar.addEventListener('input', filterList);

// 标签切换监听
tags.forEach(tag => tag.addEventListener('click', () => {
    tags.forEach(t => t.classList.remove('active'));
    tag.classList.add('active');
    filterList();
}));

// 弹窗关闭与重抽逻辑
document.querySelector('.close-btn').onclick = () => overlay.classList.remove('active');
document.getElementById('accept-btn').onclick = () => overlay.classList.remove('active');
document.getElementById('re-roll').onclick = () => document.getElementById('random-pick').click();

// 点击背景关闭弹窗
window.onclick = (e) => { if (e.target == overlay) overlay.classList.remove('active'); };

// 初始渲染
displayRecipes(recipeData);