<template>
    <div>
        <HomeCourses/>
        <Fundamentals/>
        <Frameworks/>
        <Footer/>
    </div>
</template>

<script>
import HomeCourses from '../components/HomeCourses.vue';
import Fundamentals from '../components/Fundamentals.vue';
import Frameworks from '../components/Frameworks.vue';
import Footer from '../components/footer.vue';

export default {
  components: {
    HomeCourses,
    Fundamentals,
    Frameworks,
    Footer
  }
}
</script>

