---
sidebarDepth: 2
---

# Your first Vue Application

In this lesson, you are going to take a look at Vue to a web page by dropping in a script tag. This is a great first step to introducing Vue into different projects.

```html
<!-- development version, includes helpful console warnings -->
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
```


## Demos

### Counter Demo

This is an example you will see a lot when you get started but its a great way to learn a few of the key concepts in Vue. You will also build out this same example later in the course when you start building components in an application built with the Vue CLI.

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Vue Counter</title>
  <style>
    div {
      font-size: 40px;
    }

    .negative {
      color: red;
    }
  </style>
</head>
<body>

  <div id="app">
    <div :class="{ negative: count < 0 }">{{ count }}</div>
    <button @click="increase">Increase</button>
    <button @click="decrease">Decrease</button>
  </div>

  <!-- development version, includes helpful console warnings -->
  <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
  <script>
    const app = new Vue({
      el: '#app',
      data: {
        count: 0
      },
      methods: {
        increase() {
          this.count++;
        },
        decrease() {
          this.count--;
        }
      }
    })
  </script>

</body>
</html>
```


### Two Way Data Binding


```html
<!DOCTYPE html>
<html lang="en">

<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="ie=edge">
<title>Data Binding</title>
</head>

<body>

<div id="app">
<input type="text" placeholder="Enter your first name" v-model="name">
Your Name: {{ name }}
</div>

<!-- development version, includes helpful console warnings -->
<script src="[https://cdn.jsdelivr.net/npm/vue/dist/vue.js](https://cdn.jsdelivr.net/npm/vue/dist/vue.js)"></script>
<script>
const app = new Vue({
el: '#app',
data: {
name: ''
}
})
</script>

</body>

</html>
```

### Timer Demo

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Hello, Vue.js</title>

</head>

<body>

  <div id="app">
    <h1>{{ message }}</h1>
    <p>{{ now }}</p>
  </div>

  <!-- development version, includes helpful console warnings -->
  <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
  <script>
    const app = new Vue({
      el: '#app',
      data: {
        message: 'Hello Vue!',
        now: new Date()
      },
      methods: {
        updateDate() {
          this.now = new Date();
        }
      },
      mounted() {
        setInterval(() => {
          this.updateDate();
        }, 100);
      }
    })
  </script>

</body>

</html>
```
