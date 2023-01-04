<template>
    <div>
        <HomeFaq/>
        <Fundamentals/>
        <Frameworks/>
        <Footer/>
    </div>
</template>

<script>
import HomeFaq from '../components/HomeFaq.vue';
import Fundamentals from '../components/Fundamentals.vue';
import Frameworks from '../components/Frameworks.vue';
import Footer from '../components/footer.vue';

export default {
  components: {
    HomeFaq,
    Fundamentals,
    Frameworks,
    Footer
  }
}
</script>

