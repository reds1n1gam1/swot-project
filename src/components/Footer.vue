<template>
    <div class="footer">
        <div class="footer__title">SWOT Tool</div>
        <div class="footer__subtitle">Have questions or suggestions? We’d love to hear from you.</div>
        <ul class="footer__links">
            <li>Email: <a href="mailto:madisaginaliyev@gmail.com">madisaginaliyev@gmail.com</a></li>
            <li>Github: <a href="github.com/reds1n1gam1/swot-project">github.com/reds1n1gam1/swot-project</a></li>
        </ul>
        <div class="footer__bottom">
            <p class="footer__text">SWOT Tool</p>
            <div class="footer_rights">© 2026 SWOT Tool. All rights reserved.</div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.footer {
    margin-block-start: 32px;
    background-color: var(--primary-color);
    border-radius: 16px;
    padding: 32px;
    display: flex;
    flex-direction: column;
    gap: 16px
}

.footer__title {
    font-weight: 400;
    font-size: 24px;
}

.footer__subtitle {
    font-weight: 400;
    font-size: 16px;
}

.footer__bottom {
    padding: 16px 0;
    display: flex;
    justify-content: space-between;
    border-top: 1px solid var(--secondary-color);
}

@media (max-width: 767px) {
    .footer__bottom {
        gap: 24px;
        flex-direction: column;
    }
}
</style>