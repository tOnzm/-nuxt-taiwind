<template>
    <div class="relative inline-block">
        <li @click="toggleDropdown" class="cursor-pointer py-2 sm:text-sm">
            <span class="flex items-center gap-1 truncate">
                <Icon name="hugeicons:globe-02" /> {{ selectedOption }}</span
            >
            <span
                class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"
            >
            </span>
        </li>

        <div
            v-if="isOpen"
            class="absolute z-10 mt-1 rounded-sm bg-white shadow-lg"
        >
            <ul
                tabindex="-1"
                role="listbox"
                aria-labelledby="listbox-label"
                aria-activedescendant="listbox-option-3"
                class="max-h-60 overflow-auto rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
            >
                <li
                    v-for="(option, index) in options"
                    :key="index"
                    @click="selectOption(option)"
                    class="relative cursor-pointer select-none py-2 pl-3 pr-9 text-gray-900"
                >
                    <span
                        :class="[
                            selectedOption === option
                                ? 'font-semibold'
                                : 'font-normal',
                            'block truncate',
                        ]"
                    >
                        {{ option }}
                    </span>

                    <span
                        v-if="selectedOption === option"
                        class="absolute inset-y-0 right-0 flex items-center pr-4"
                    >
                    </span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
const options = ['ไทย', 'อังกฤษ']
const selectedOption = ref(options[0])
const isOpen = ref(false)

const toggleDropdown = () => {
    isOpen.value = !isOpen.value
}

const selectOption = (option) => {
    selectedOption.value = option
    isOpen.value = false
}
</script>

<style scoped></style>
