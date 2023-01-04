<template>
    <div>
        <HomeInstructors/>
        <Fundamentals/>
        <Frameworks/>
        <Footer/>
    </div>
</template>

<script>
import HomeInstructors from '../components/HomeInstructors.vue';
import Fundamentals from '../components/Fundamentals.vue';
import Frameworks from '../components/Frameworks.vue';
import Footer from '../components/footer.vue';

export default {
  components: {
    HomeInstructors,
    Fundamentals,
    Frameworks,
    Footer
  }
}
</script>

