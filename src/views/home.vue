<template>
  <div>
      <HomeBanner/>
      <HomeCourses/>
      <Fundamentals/>
      <Frameworks/>
      <HomeFaq/>
      <HomeInstructors/>
      <HomeContact/>
      <Footer/>
  </div>
</template>

<script>
import HomeBanner from '../components/HomeBanner.vue';
import HomeCourses from '../components/HomeCourses.vue';
import HomeFaq from '../components/HomeFaq.vue';
import HomeInstructors from '../components/HomeInstructors.vue';
import HomeContact from '../components/HomeContact.vue';
import Fundamentals from '../components/Fundamentals.vue';
import Frameworks from '../components/Frameworks.vue';
import Footer from '../components/footer.vue';

export default {
components: {
  HomeBanner,
  HomeCourses,
  HomeFaq,
  HomeInstructors,
  HomeContact,
  Fundamentals,
  Frameworks,
  Footer
}
}
</script>