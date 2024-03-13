<template>
  <div class="outer-container">
    <div class="inner-container">
      <div v-for="(category, i) in items" :key="i">
        <label :for="category.title" :id="'chevron-'+category.title">
          <span>{{ category.title }}</span>
        </label>
        <input class="trigger" :id="category.title" type="checkbox"/>
        <span class="chevron"></span>
        <div class="hidden-content">
          <ul v-if="category.exercises">
            <li v-for="(exercise, j) in category.exercises" :key="j">
              <span>{{ exercise.name }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
    name: 'VerticalMenu',
    props: {
      items: {
        type: Array,
        required: true,
      },
    }
}

</script>

<style scoped lang="scss">
  * {
    box-sizing: border-box;
    user-select: none;
  }
  .inner-container {
    padding: 0;
    padding-right: 0.25em;
    position: relative;
    
    input {
      position: absolute;
      visibility: hidden;
    }

    div {
      position: relative;
    }

    label, li {
      border-radius: 4px;
    }
    
    label {
      display: flex;
      width: 100%;
      align-items: center;
      justify-content: space-between;
      padding: 0 1em;
      padding-right: 5em;
    }
  }

  span {
    display: flex;
    padding: 0.5em;
  }

  span.chevron {
    display: flex;
    position: absolute;
    right: 0;
    top: 0;
    height: auto;
    padding: 0.75em;
    padding-right: 1em;
    transform: translateY(0.15em);
  }

  .chevron::before {
    border-style: solid;
    border-width: 0.12em 0.12em 0 0;
    content: '';
    display: inline-block;
    height: 0.45em;
    position: relative;
    top: 0.15em;
    transform: rotate(-45deg);
    vertical-align: top;
    width: 0.45em;
    transition: transform 200ms ease-in-out;
  }

  .inner-container .trigger:checked + .chevron::before {
    transform: rotate(135deg);
  }

  .outer-container {
    height: fit-content;
  }
  .outer-container, .inner-container {
    display: flex;
    flex-direction: column;
  }

  .hidden-content {
    height: 0;
    overflow: hidden;
    transition: height 500ms ease-in-out;
  }

  .inner-container .trigger:checked + .chevron + .hidden-content {
    height: 100%;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .inner-container {
    ul li {
      padding-left: 1.5em;
    }
    label:hover, .inner-container ul li:hover, ul li:nth-child(odd):hover {
      background: rgb(var(--v-theme-surface-light));
    }
  }
</style>