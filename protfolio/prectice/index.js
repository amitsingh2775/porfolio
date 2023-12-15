var add=document.querySelector('.bt1');
var rem=document.querySelector('.bt2');
////let like=document.querySelector('.bx .bx-heart');
//let share=document.querySelector('.bx .bx-heart');
let lk=document.querySelector('.number1');
let sr=document.querySelector('.number2');

add.addEventListener('click',function(){
    if (add.innerText === "Follow") {
        add.innerText = "Unfollow";
        add.style.backgroundcolor="red";
        // Add code here to handle the "Unfollow" action, like sending a request to unfollow the user.
    } else {
        add.innerText = "Follow";
        add.style.backgroundcolor="green";

        // Add code here to handle the "Follow" action, like sending a request to follow the user.
    }
    add.remove();

    

});
rem.addEventListener('click',function(){
    if (rem.innerText === "Unfollow") {
        rem.innerText = "follow";
        // Add code here to handle the "Unfollow" action, like sending a request to unfollow the user.
    } else {
        rem.innerText = "Unfollow";
        // Add code here to handle the "Follow" action, like sending a request to follow the user.
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const likeIcon = document.getElementById('like-icon');
    const likeCount = document.getElementById('like-count'); // Declare likeCount here
    let isLiked = false;
    let likeCountValue = 0;

    likeIcon.addEventListener('click', function() {
        if (isLiked) {
            // User is disliking, decrease the count
            likeCountValue--;
            likeIcon.style.color = ''; // Remove the 'red' color
        } else {
            // User is liking, increase the count
            likeCountValue++;
            likeIcon.style.color = 'red'; // Change the heart color to red
        }

        // Update the like count
        likeCount.textContent = likeCountValue;

        // Toggle the like state
        isLiked = !isLiked;
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const shareIcon = document.getElementById('share-icon');
    let shareCount = document.getElementById('share-count');

    let shareCountValue = 0;

    shareIcon.addEventListener('click', function() {
        // Perform the share functionality here (e.g., open a sharing dialog or perform the share action)

        // Update the share count
        shareCountValue++;
        shareCount.textContent = shareCountValue;
    });
});

