// Dados dos produtos
const products = [
    {
        id: 1,
        name: "Smartphone Galaxy S23",
        price: 2999.99,
        icon: "fas fa-mobile-alt",
        image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=300&fit=crop",
        description: "Smartphone Samsung Galaxy S23 com 128GB"
    },
    {
        id: 2,
        name: "Notebook Dell Inspiron",
        price: 4599.99,
        icon: "fas fa-laptop",
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop",
        description: "Notebook Dell Inspiron 15 polegadas"
    },
    {
        id: 3,
        name: "Fones de Ouvido Sony",
        price: 899.99,
        icon: "fas fa-headphones",
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop",
        description: "Fones de ouvido sem fio Sony WH-1000XM4"
    },
    {
        id: 4,
        name: "Smart TV LG 55\"",
        price: 3499.99,
        icon: "fas fa-tv",
        image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&h=300&fit=crop",
        description: "Smart TV LG 55 polegadas 4K"
    },
    {
        id: 5,
        name: "Câmera Canon EOS",
        price: 5999.99,
        icon: "fas fa-camera",
        image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&h=300&fit=crop",
        description: "Câmera DSLR Canon EOS Rebel T7"
    },
    {
        id: 6,
        name: "Tablet iPad Air",
        price: 3999.99,
        icon: "fas fa-tablet-alt",
        image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=300&fit=crop",
        description: "Tablet Apple iPad Air 10.9 polegadas"
    },
    {
        id: 7,
        name: "Console PlayStation 5",
        price: 4499.99,
        icon: "fas fa-gamepad",
        image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=400&h=300&fit=crop",
        description: "Console Sony PlayStation 5"
    },
    {
        id: 8,
        name: "Smartwatch Apple Watch",
        price: 2999.99,
        icon: "fas fa-clock",
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop",
        description: "Smartwatch Apple Watch Series 8"
    },
    {
        id: 9,
        name: "AirPods Pro",
        price: 2499.99,
        icon: "fas fa-headphones",
        image: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=400&h=300&fit=crop",
        description: "Fones de ouvido Apple AirPods Pro com cancelamento de ruído"
    },
    {
        id: 10,
        name: "MacBook Air M2",
        price: 8999.99,
        icon: "fas fa-laptop",
        image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=300&fit=crop",
        description: "MacBook Air com chip M2 e 256GB SSD"
    },
    {
        id: 11,
        name: "Kindle Paperwhite",
        price: 599.99,
        icon: "fas fa-book",
        image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=300&fit=crop",
        description: "E-reader Amazon Kindle Paperwhite 8GB"
    },
    {
        id: 12,
        name: "Nintendo Switch",
        price: 2499.99,
        icon: "fas fa-gamepad",
        image: "https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?w=400&h=300&fit=crop",
        description: "Console Nintendo Switch com Joy-Cons"
    },
    {
        id: 13,
        name: "GoPro Hero 11",
        price: 3499.99,
        icon: "fas fa-video",
        image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&h=300&fit=crop",
        description: "Câmera de ação GoPro Hero 11 Black"
    },
    {
        id: 14,
        name: "Echo Dot 4ª Geração",
        price: 399.99,
        icon: "fas fa-microphone",
        image: "https://images.unsplash.com/photo-1543512214-318c7553f230?w=400&h=300&fit=crop",
        description: "Smart speaker Amazon Echo Dot com Alexa"
    },
    {
        id: 15,
        name: "Ring Video Doorbell",
        price: 799.99,
        icon: "fas fa-door-open",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
        description: "Campainha inteligente Ring Video Doorbell Pro"
    },
    {
        id: 16,
        name: "Fitbit Versa 4",
        price: 1299.99,
        icon: "fas fa-heartbeat",
        image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=400&h=300&fit=crop",
        description: "Smartwatch Fitbit Versa 4 com monitor cardíaco"
    },
    {
        id: 17,
        name: "DJI Mini 3 Pro",
        price: 4999.99,
        icon: "fas fa-plane",
        image: "https://images.unsplash.com/photo-1579829366248-204fe8413f31?w=400&h=300&fit=crop",
        description: "Drone DJI Mini 3 Pro com câmera 4K"
    },
    {
        id: 18,
        name: "Samsung Galaxy Tab S9",
        price: 3499.99,
        icon: "fas fa-tablet-alt",
        image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=300&fit=crop",
        description: "Tablet Samsung Galaxy Tab S9 11 polegadas"
    }
];

// Carrinho de compras
let cart = [];

// Elementos do DOM
const productsGrid = document.getElementById('productsGrid');
const cartItems = document.getElementById('cartItems');
const cartCount = document.getElementById('cartCount');
const cartTotal = document.getElementById('cartTotal');
const cartSection = document.getElementById('cartSection');
const overlay = document.getElementById('overlay');

// Inicializar a aplicação
function init() {
    displayProducts();
    updateCartDisplay();
}

// Exibir produtos na grade
function displayProducts() {
    productsGrid.innerHTML = '';
    
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" onerror="this.style.display='none';this.nextElementSibling.style.display='flex';" style="width:100%;height:100%;object-fit:contain;border-radius:10px;" />
                <i class="${product.icon}" style="position:absolute;left:0;right:0;top:0;bottom:0;margin:auto;display:none;font-size:3rem;"></i>
            </div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <div class="product-price">R$ ${product.price.toFixed(2).replace('.', ',')}</div>
                <button class="add-to-cart-btn" onclick="addToCart(${product.id})">
                    <i class="fas fa-plus"></i> Adicionar ao Carrinho
                </button>
            </div>
        `;
        productsGrid.appendChild(productCard);
    });
}

// Adicionar produto ao carrinho
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }
    
    updateCartDisplay();
    showNotification(`${product.name} adicionado ao carrinho!`);
}

// Remover produto do carrinho
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartDisplay();
    showNotification('Produto removido do carrinho!');
}

// Atualizar quantidade de um produto
function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            updateCartDisplay();
        }
    }
}

// Atualizar exibição do carrinho
function updateCartDisplay() {
    // Atualizar contador do carrinho
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
    
    // Atualizar itens do carrinho
    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-shopping-cart"></i>
                <p>Seu carrinho está vazio</p>
                <p>Adicione alguns produtos para começar!</p>
            </div>
        `;
    } else {
        cartItems.innerHTML = '';
        cart.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <div class="cart-item-image">
                    <img src="${item.image}" alt="${item.name}" onerror="this.style.display='none';this.nextElementSibling.style.display='flex';" />
                    <i class="${item.icon}" style="display:none;"></i>
                </div>
                <div class="cart-item-info">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-price">R$ ${item.price.toFixed(2).replace('.', ',')}</div>
                </div>
                <div class="cart-item-controls">
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                    <span class="quantity">${item.quantity}</span>
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                    <button class="remove-btn" onclick="removeFromCart(${item.id})">
                        Remover
                    </button>
                </div>
            `;
            cartItems.appendChild(cartItem);
        });
    }
    
    // Atualizar total
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.textContent = `R$ ${total.toFixed(2).replace('.', ',')}`;
}

// Alternar visibilidade do carrinho
function toggleCart() {
    cartSection.classList.toggle('open');
    overlay.classList.toggle('active');
    document.body.style.overflow = cartSection.classList.contains('open') ? 'hidden' : 'auto';
}

// Finalizar compra
function checkout() {
    if (cart.length === 0) {
        showNotification('Adicione produtos ao carrinho antes de finalizar a compra!', 'error');
        return;
    }
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    // Simular processo de checkout
    showNotification('Processando pagamento...', 'info');
    
    setTimeout(() => {
        const orderNumber = Math.floor(Math.random() * 1000000);
        alert(`
🎉 Compra finalizada com sucesso!

Número do pedido: #${orderNumber}
Total: R$ ${total.toFixed(2).replace('.', ',')}
Itens: ${cart.reduce((sum, item) => sum + item.quantity, 0)}

Obrigado por sua compra!
        `);
        
        // Limpar carrinho
        cart = [];
        updateCartDisplay();
        toggleCart();
    }, 2000);
}

// Mostrar notificação
function showNotification(message, type = 'success') {
    // Remover notificação existente
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Criar nova notificação
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
        <span>${message}</span>
    `;
    
    // Adicionar estilos
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#28a745' : type === 'error' ? '#dc3545' : '#17a2b8'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 10000;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        animation: slideInRight 0.3s ease;
        max-width: 300px;
    `;
    
    // Adicionar animação CSS
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideInRight {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
    `;
    document.head.appendChild(style);
    
    document.body.appendChild(notification);
    
    // Remover notificação após 3 segundos
    setTimeout(() => {
        notification.style.animation = 'slideInRight 0.3s ease reverse';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 300);
    }, 3000);
}

// Fechar carrinho ao clicar no overlay
overlay.addEventListener('click', toggleCart);

// Fechar carrinho com tecla ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && cartSection.classList.contains('open')) {
        toggleCart();
    }
});

// Inicializar quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', init); 