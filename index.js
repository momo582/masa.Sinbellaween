document.addEventListener('DOMContentLoaded', function() {
    const showCommentFormBtn = document.getElementById('show-comment-form-btn');
    const commentFormContainer = document.getElementById('comment-form-container');
    const loginFacebookBtn = document.getElementById('login-facebook');
    const loginGoogleBtn = document.getElementById('login-google');
    const submitCommentBtn = document.getElementById('submit-comment-btn');
    const commentTextarea = document.getElementById('comment-text');
    const commentSection = document.getElementById('comment-section');
    const commentError = document.getElementById('comment-error');
    const elementsToAnimate = document.querySelectorAll('.hidden'); // تحديد كل العناصر اللي هيحصلها انيميشن

    if (showCommentFormBtn) {
        showCommentFormBtn.addEventListener('click', function() {
            if (commentFormContainer) commentFormContainer.classList.remove('hidden');
            if (showCommentFormBtn) showCommentFormBtn.classList.add('hidden');
        });
    }

    if (loginFacebookBtn) {
        loginFacebookBtn.addEventListener('click', function() {
            alert('سيتم توجيهك لتسجيل الدخول عبر فيسبوك');
        });
    }

    if (loginGoogleBtn) {
        loginGoogleBtn.addEventListener('click', function() {
            alert('سيتم توجيهك لتسجيل الدخول عبر جوجل');
        });
    }

    if (submitCommentBtn) {
        submitCommentBtn.addEventListener('click', function() {
            if (commentTextarea && commentSection && commentFormContainer && showCommentFormBtn && commentError) {
                const comment = commentTextarea.value.trim();
                if (comment !== '') {
                    const newComment = document.createElement('p');
                    newComment.textContent = comment;
                    newComment.classList.add('comment', 'hidden');
                    commentSection.appendChild(newComment);
                    checkVisibility();
                    commentTextarea.value = '';
                    commentFormContainer.classList.add('hidden');
                    showCommentFormBtn.classList.remove('hidden');
                    commentError.classList.add('hidden');
                } else {
                    commentError.classList.remove('hidden');
                    commentError.textContent = 'يرجى كتابة تعليق.';
                }
            }
        });
    }

    function fetchComments() {
        if (commentSection) {
            const comments = [
                'مكان رائع للسباحة!',
                'الدورات التدريبية ممتازة.',
                'الكافيتريا عندها مشروبات لذيذة.'
            ];
            commentSection.innerHTML = '';
            comments.forEach(comment => {
                const newComment = document.createElement('p');
                newComment.textContent = comment;
                newComment.classList.add('comment', 'hidden');
                commentSection.appendChild(newComment);
            });
            checkVisibility();
        }
    }

    function checkVisibility() {
        elementsToAnimate.forEach(element => {
            const elementTop = element.offsetTop;
            const windowHeight = window.innerHeight;
            const scrollPosition = window.scrollY;

            if (elementTop < scrollPosition + (windowHeight * 0.75)) {
                element.classList.add('show');
                element.classList.remove('hidden');
            }
        });
    }

    window.addEventListener('load', checkVisibility);
    window.addEventListener('scroll', checkVisibility);

    fetchComments();
});