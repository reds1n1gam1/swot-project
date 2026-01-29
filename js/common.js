const { createApp, ref } = Vue

createApp({
    setup() {
        const navigationItems = ref([
            {
                title: 'Strength',
                icon: 'fa-solid fa-dumbbell',
                id: 0,
            },
            {
                title: 'Weakness',
                icon: 'fa-solid fa-cloud-rain',
                id: 1,
            },
            {
                title: 'Opportunites',
                icon: 'fa-solid fa-mountain',
                id: 2,
            },
            {
                title: 'Threats',
                icon: 'fa-solid fa-cloud-bolt',
                id: 3,
            },
        ])

        const cards = ref([
            {
                text: 'John Doe 1'
            },
            {
                text: 'John Doe 2 '
            },
            {
                text: 'John Doe3 '
            },
            {
                text: 'John Doe 4 '
            },
            {
                text: 'John Doe 5'
            },
        ])

        const activeId = ref(0)

        function setActiveId(id) {
            activeId.value = id
        }

        return {
            cards,
            navigationItems,
            activeId,
            setActiveId
        }
    }
}).mount('#app')