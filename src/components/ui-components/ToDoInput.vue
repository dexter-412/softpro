<template>
  <div class="to-do-input">
    <input
        class="to-do-input__input"
        :class="{'to-do-input__input--error': isError}"
        type="text"
        placeholder="Введіть назву"
        v-model="valueLocal"
    />
    <span
        class="to-do-input__error"
        v-if="isError"
    >
      Поле має бути заповненим
    </span>
  </div>
</template>

<script>
export default {
  name: "ToDoInput",

  props: {
    value: {
      type: String,
      default: '',
    },
    isError: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    valueLocal: {
      get: function() {
        return this.value;
      },
      set: function(value) {
        this.$emit('input', value);
      }
    }
  }
 }
</script>

<style lang="scss">
.to-do-input {
    &__input {
      display: block;
      width: 100%;
      padding: 15px;
      margin-bottom: 5px;
      outline: none;

      &--error {
        border-color: var(--color-error);
      }
     }

    &__error {
      color: var(--color-error);
    }
 }

</style>