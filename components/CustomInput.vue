<script setup>
  defineProps({
    type: {
      type: String,
      default: 'text'
    },
    label: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    },
    modelValue: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    error: {
      type: String,
      default: ''
    }
  });
</script>

<template>
  <div class="mb-3">
      <label :for="name" class="text-sm font-semibold text-burem-500 ml-1">{{ label }}</label>
      <input 
        :id="name" 
        class="mt-2 focus:outline-primary-500 w-full h-4 px-6 bg-form py-6 rounded-lg transition-all duration-200" 
        :class="{ 'border-red-500': error }" 
        :placeholder="placeholder" 
        :type="type" 
        @input="$emit('update:modelValue', $event.target.value)"
      />
      <div v-if="error">
        <p class="text-abang-500 text-xs" v-if="error">{{ error }}</p>
      </div>
    </div>
</template>