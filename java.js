window.addEventListener('load', () => {
  Swal.fire({
      title: 'BURUAN KLIK YES',
      // text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes',
      cancelButtonText: 'No',
  }).then((result) => {
      if (result.isConfirmed) {
          document.querySelector('.song').play();
          animationTimeline();
      } else {
          animationTimeline();
      }
  });
});

onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };
