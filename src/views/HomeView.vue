<template>
    <!-- <div class="header-ribbon">

        <h1>
            Rockmuusikal Seto odüsseia
        </h1>
    </div>

    <div id="menyyriba">

        <div class="button-container">
            <h3 style="padding-right: 10px;">Trupp</h3>
            <h3 style="padding-right: 10px; padding-left: 10px;">Tiim</h3>
            <h3 style="padding-left: 10px;">Toetajad</h3>
        </div>

    </div>


    <div class="main-content">
        <div class="poster">
            <img src="/src/assets/ruut_1080x1080.jpg" alt="poster" style="max-height: 300px;">
        </div>

        <div class="description">
            <p style="padding: 10px;">
                Odüsseus värvatakse sõtta. Sõda on meeste jaoks vilets valik. Võitlus läheb lahti erinevatel põhjustel:
                kättemaks, himurus, ülbus, ahnus, võim, alpus ja haavatud au. Ükskõik, mida mehed saagiks ka ei saa,
                tunnevad
                nad sellest rõõmu vaid näputäie aastaid, enne, kui surevad. Palju tõenäolisem, et nad hukkuvad varandust
                taga
                ajades.
            </p>
            <p style="padding: 10px;">
                „Seto Odüsseia“ loos on Trooja sõjast möödas kümme aastat ja veel kümme aastat on Odüsseuse rännakud
                kestnud, ta
                on elus. Kodus ootavad teda ikka veel naine Penelope ja poeg Telemachos. Naise elu teevad kibedaks kolm
                üsna
                koomilist kosilast, kes loodavad abielluda Odüsseuse lesega ning saada kaasavaraks tema kuningriigi.
                Pikaajaline
                seiklusrikas retk viib peategelase jumalate, nõidade ja nümfide juurde, koguni allilma, aga tema igatseb
                kodu ja
                oma peret.
            </p>
            <p style="padding: 10px;">
                Ükski sõda ei lõpe siis, kui ta kirjade järgi lõpeb. Võimalik, et ükski sõda ei lõpe enne, kui keegi
                teda enam
                ei mäleta. See lavalugu on täis tundeid, igatsust, nalja, muusikat, tantsu, võitlust ja võistlust ning
                tingimusteta armastust.
            </p>
        </div>
    </div>
 
    <div class="footer-ribbon">
        <h4>
            Luhamaal, Anželika Mahetalus 30., 31. juulil ja 1., 4., 5., 6., 7., 8., 9., 10. augustil 2025
        </h4>
    </div> -->
 

    <div @click="changeBackground" ref="backgroundContainer" class="background-container"></div>


</template>

<script>
export default {
  data() {
    return {
      images: [
        "src/assets/Group_4.png",
        "src/assets/Group_4_copy.png",
      ],
      currentImageIndex: 0,
    };
  },
  methods: {
    changeBackground() {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length; // Correct cycling
      this.$refs.backgroundContainer.style.backgroundImage = `url("${this.images[this.currentImageIndex]}")`;
    },
  },
};
</script>