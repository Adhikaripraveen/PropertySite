import react from "react";
import data from "../data.json";

const Card = () => {
  setTimeout(() => {
    let slider = document.querySelector(".slider");

    let firstImg = slider.firstChild;
    let firstImgWidth = firstImg.clientWidth + 25;
    let scrollWidth = slider.scrollWidth - slider.clientWidth;
    let left = document.querySelector('[name="left"]');
    let right = document.querySelector('[name="right"]');

    // let isDragging = false;
    // let prevPageX;
    // let prevScrollLeft;

    // slider.addEventListener("mousedown", startDragging);
    // slider.addEventListener("touchstart", startDragging);

    // function startDragging(event) {
    //   if (event.type === "mouseup") {
    //     // Mouse event cleanup
    //     document.removeEventListener("mousemove", dragElement, {
    //       passive: false,
    //     });
    //     document.removeEventListener("mouseup", stopDragging, {
    //       passive: false,
    //     });
    //   } else if (event.type === "touchend") {
    //     // Touch event cleanup
    //     document.removeEventListener("touchmove", dragElement, {
    //       passive: false,
    //     });
    //     document.removeEventListener("touchend", stopDragging, {
    //       passive: false,
    //     });
    //   }
    //   event.preventDefault();
    //   isDragging = true;
    //   prevPageX = event.pageX;
    //   prevScrollLeft = slider.scrollLeft;

    //   isDragging = true;

    //   if (event.type === "mousedown") {
    //     // Mouse event handling
    //     document.addEventListener("mousemove", dragElement);
    //     document.addEventListener("mouseup", stopDragging);
    //   } else if (event.type === "touchstart") {
    //     // Touch event handling
    //     document.addEventListener("touchmove", dragElement);
    //     document.addEventListener("touchend", stopDragging);
    //   }
    // }

    // function dragElement(event) {
    //   if (!isDragging) return;

    //   // event.preventDefault();

    //   if (event.type === "mousemove") {
    //     let positionDiff = event.pageX - prevPageX;
    //     slider.scrollLeft = prevScrollLeft - positionDiff;
    //   } else if (event.type === "touchmove") {
    //     let positionDiff = event.touches[0].pageX - prevPageX;
    //     slider.scrollLeft = prevScrollLeft - positionDiff;
    //   }
    // }

    // function stopDragging(event) {
    //   isDragging = false;
    // }

    let isDragStart = false;
    let prevPageX;
    let prevScrollLeft;

    slider.addEventListener("mousedown", (e) => {
      isDragStart = true;
      prevPageX = e.pageX;
      prevScrollLeft = slider.scrollLeft;
    });
    slider.addEventListener("mousemove", (e) => {
      if (!isDragStart) return;
      e.preventDefault();
      let positionDiff = e.pageX - prevPageX;
      slider.scrollLeft = prevScrollLeft - positionDiff;
    });
    slider.addEventListener("mouseup", (e) => {
      isDragStart = false;
    });
    right.addEventListener("click", () => {
      slider.scrollLeft += firstImgWidth;
      console.log(slider.scrollLeft);
      if (slider.scrollLeft > scrollWidth) {
        right.style.display = "none";
      } else {
        left.style.display = "block";
      }
    });
    left.addEventListener("click", () => {
      slider.scrollLeft -= firstImgWidth;
      console.log(slider.scrollLeft);

      if (slider.scrollLeft === 0) {
        left.style.display = "none";
      } else {
        right.style.display = "block";
      }
    });
  });

  return (
    <>
      {data.map((data, id) => {
        return (
          <div className="card" key={id}>
            <img src={data.image} alt="items" />
            <p className="price">
              <span>&#8377;</span>
              {data.price}
            </p>
            <p className="name">{data.name}</p>
            <p className="detail">{data.detail}</p>
          </div>
        );
      })}
    </>
  );
};

export default Card;
