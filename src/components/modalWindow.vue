<template>
    <transition name="modal">
      <div class="modal-mask">
        <div class="modal-wrapper">
          <div class="modal-container">
            <h2 class="message">{{ confirmMessage }}</h2>
            <div class="buttons__block">
              <button class="btn btn_cancel" @click="$emit('cancel')">Cancel</button>
              <button class="btn btn_confirm" @click="$emit('confirm')">Confirm</button>
            </div>
          </div>
        </div>
      </div>
    </transition>
</template>

<script>
  export default {
    name: "modalWindo",
    props: {
      confirmMessage: {
        type: String,
        default: 'Are you sure about this?'
      }
    }
  }
</script>

<style scoped>


  .modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    transition: opacity 0.3s ease;
  }

  .modal-wrapper {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal-container {
    position: relative;
    vertical-align: bottom;
    width: 350px;
    height: 150px;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
    transition: all 0.3s ease;
    font-family: Helvetica, Arial, sans-serif;
  }

  .buttons__block {
    position: absolute;
    bottom: 12%;
    width: 100%;
    display: flex;
    justify-content: space-around;
  }

  .message {
    font-family: "Open Sans", Helvetica, arial, sans-serif;
    font-size: 20px;
    text-align: center;
    margin-top: 5%;
    color: #42b983;
  }

  .btn {
    margin: 0;
  }

  .btn_cancel {
    border-color: red;
    color: red;
  }

  .btn_confirm {
    border-color: green;
    color: green;
  }

  @media all and (max-width: 390px) {
    .modal-container {
      width: 280px;
    }

    .message {
      font-size: 17px;
    }
  }

  .modal-enter {
    opacity: 0;
  }

  .modal-leave-active {
    opacity: 0;
  }

  .modal-enter .modal-container,
  .modal-leave-active .modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }

</style>
