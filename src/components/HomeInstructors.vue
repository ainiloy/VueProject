<template>
  <section id="instructors" class="p-5 bg-primary">
        <div class="container">
          <h2 class="text-center text-white">Our Instructors</h2>
          <p class="lead text-center text-white mb-5">
            Our instructors all have 5+ years working as a web developer in the
            industry
          </p>
  
          <div class="row g-4">
  
            <div class="col-md-6 col-lg-3" v-for="post in posts" :key="post.id">
              <div class="card bg-light">
                <div class="card-body text-center">
                  <img
                    :src="post.img"
                    class="rounded-circle mb-3"
                    alt=""
                  />
                  <h3 class="card-title mb-3">{{post.title}}</h3>
                  <p class="card-text">
                      {{post.des}}
                  </p>
                  <a href="#"><i class="bi bi-twitter text-dark mx-1"></i></a>
                  <a href="#"><i class="bi bi-facebook text-dark mx-1"></i></a>
                  <a href="#"><i class="bi bi-linkedin text-dark mx-1"></i></a>
                  <a href="#"><i class="bi bi-instagram text-dark mx-1"></i></a>
                </div>
              </div>
            </div>
  
          </div>
        </div>
      </section>
  </template>
  
  <script>
  import axios from 'axios'
  export default {
    name: 'app',
    data () {
      return {
        posts: []
      }
    },
    methods: {
    },
    created() {
      axios.get('http://vlapi.saasdiscover.com/api/getInstructor')
      .then(response => {
          this.posts = response.data
      })
      .catch(e => {
          console.log(e);
      })
    }
  }
  </script>
  