<template></template>
<script>
    export default {
        props: {
            'selector': { type: String, default: '.cards > ul' },
        },
        methods: {
            initCards($el) {
                $el.querySelectorAll(this.selector)
                    .forEach(el => {
                        el.style.cssText = `--total: '${el.childElementCount}'`;
                    });
            },
        },
        mounted() {
            this.$nextTick(() => {
                this.initCards(document);
            });
        },
    };
</script>
