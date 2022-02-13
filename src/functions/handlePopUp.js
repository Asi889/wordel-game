export function handlePopUp(popUpValue,currentRow,wiggle,message) {
    popUpValue.value = message;
      currentRow.value.tried = true;
      wiggle.wiggle = true;
      setTimeout(() => {
        currentRow.value.tried = false;
        popUpValue.value = "";
        wiggle.wiggle = false;
      }, 2000);
      return;
  }