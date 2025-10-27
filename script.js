document.querySelectorAll('nav a').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                window.scrollTo({
                    top: targetElement.offsetTop - 60,
                    behavior: 'smooth'
                });
            });
        });
        
        // Interactive map button
        document.getElementById('explore-btn').addEventListener('click', function() {
            alert('Exploring the cultural zones of Dakshinachitra:\n\n• Tamil Nadu - Chettinad Mansions\n• Kerala - Traditional Wooden Houses\n• Karnataka - Rural Artifacts\n• Andhra Pradesh - Local Crafts');
        });
        
        // Add scroll effect to header
        window.addEventListener('scroll', function() {
            const header = document.querySelector('header');
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            
            header.style.backgroundPosition = 'center ' + rate + 'px';
        });
        
        // Gallery image click effect
        document.querySelectorAll('.gallery-item').forEach(item => {
            item.addEventListener('click', function() {
                const imgSrc = this.querySelector('img').src;
                const caption = this.querySelector('.gallery-caption').textContent;
                
                // Create modal view
                const modal = document.createElement('div');
                modal.style.position = 'fixed';
                modal.style.top = '0';
                modal.style.left = '0';
                modal.style.width = '100%';
                modal.style.height = '100%';
                modal.style.backgroundColor = 'rgba(0,0,0,0.8)';
                modal.style.display = 'flex';
                modal.style.justifyContent = 'center';
                modal.style.alignItems = 'center';
                modal.style.zIndex = '1000';
                modal.style.cursor = 'pointer';
                
                const modalImg = document.createElement('img');
                modalImg.src = imgSrc;
                modalImg.style.maxWidth = '90%';
                modalImg.style.maxHeight = '90%';
                modalImg.style.objectFit = 'contain';
                
                const modalCaption = document.createElement('div');
                modalCaption.textContent = caption;
                modalCaption.style.position = 'absolute';
                modalCaption.style.bottom = '20px';
                modalCaption.style.color = 'white';
                modalCaption.style.backgroundColor = 'rgba(0,0,0,0.7)';
                modalCaption.style.padding = '10px 20px';
                modalCaption.style.borderRadius = '4px';
                
                modal.appendChild(modalImg);
                modal.appendChild(modalCaption);
                
                modal.addEventListener('click', function() {
                    document.body.removeChild(modal);
                });
                
                document.body.appendChild(modal);
            });
        });