(() => {
  console.log("hello world");
  const canvas = document.getElementById("canvas1");
  if (canvas) {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    const ctx = canvas.getContext("2d");

    function drawPolygon(ctx, centerX, centerY, sides, radius, rotation) {
      ctx.beginPath();
      for (let i = 0; i < sides; i++) {
        const angle = (i * Math.PI * 2) / sides + rotation;

        const x = centerX + radius * Math.cos(angle);
        const y = centerY + radius * Math.sin(angle);

        if (i === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }

      ctx.lineWidth = 10;
      ctx.strokeStyle = "#000000";
      //ctx.fillStyle = "#000000";
      ctx.closePath();
      //ctx.fill();
      ctx.stroke();
    }

    drawPolygon(ctx, canvas.width / 2, canvas.height / 2, 12, 100, 0);

    let circle = {
      x: 140,
      y: 100,
      radius: 20,
      color: "green",
      isDragging: false,
    };

    function drawCircle() {
      ctx.clearRect(
        circle.lastX - circle.radius - 1,
        circle.lastY - circle.radius - 1,
        circle.radius * 2 + 2,
        circle.radius * 2 + 2
      );
      ctx.beginPath();
      ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2, false);
      ctx.fillStyle = circle.color;
      ctx.fill();
      ctx.closePath();
    }

    function isMouseInCircle(mouseX, mouseY) {
      const dx = mouseX - circle.x;
      const dy = mouseY - circle.y;
      return dx * dx + dy * dy <= circle.radius * circle.radius;
    }

    function onMouseDown(event) {
      const rect = canvas.getBoundingClientRect();
      const mouseX = event.clientX - rect.left;
      const mouseY = event.clientY - rect.top;

      if (isMouseInCircle(mouseX, mouseY)) {
        circle.isDragging = true;
      }
    }
    function onMouseMove(event) {
      if (circle.isDragging) {
        const rect = canvas.getBoundingClientRect();
        const mouseX = event.clientX - rect.left;
        const mouseY = event.clientY - rect.top;

        circle.x = mouseX;
        circle.y = mouseY;
        drawCircle();
      }
    }
    function onMouseUp() {
      circle.isDragging = false;
    }

    // Attach event listeners
    canvas.addEventListener("mousedown", onMouseDown);
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mouseup", onMouseUp);
    canvas.addEventListener("mouseout", onMouseUp);
    drawCircle();
  }
})();
