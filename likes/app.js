const posts = [
  {
    id: 1,
    content: 'Bacon ipsum dolor amet short loin sed exercitation, ad consectetur filet mignon pastrami. Deserunt capicola doner dolore, do incididunt anim ball tip in hamburger sunt tongue jowl. Tongue aute andouille, ad shoulder sunt landjaeger. Bresaola shoulder magna frankfurter quis tenderloin dolore ut reprehenderit veniam in enim cupidatat. Nostrud sed corned beef exercitation dolore flank kevin jerky fatback culpa do strip steak.',
    date: '2018-09-15',
    user: 'Jane Doe',
    likes: 0,
    image: 'http://fillmurray.com/300/300'
  },
  {
    id: 2,
    content: 'Fugiat nisi eu, est incididunt buffalo dolore laborum ham fatback meatball salami tail rump. Capicola eiusmod salami beef ribs, shank alcatra jowl bacon cow. Meatball deserunt flank, swine ipsum kielbasa tail dolore occaecat rump incididunt fugiat magna non.',
    date: '2018-09-17',
    user: 'Me',
    likes: 1,
    image: 'http://placecage.com/300/300'
  },
]

$(document).ready(function () {
  $('.add-friend').click(function () {
    const $friendCountEl = $(this).parent().find('.friend-count')[0]
    const friendCount = $($friendCountEl).text()
    console.log(friendCount);
    const newCount = Number(friendCount) + 1
    return $($friendCountEl).text(newCount)
  })

  $('.add-like').click(function () {
    const $likeCountEl = $(this).parent().find('.like-count')[0]
    const likeCount = $($likeCountEl).text()
    console.log(likeCount);
    const newCount = Number(likeCount) + 1
    return $($likeCountEl).text(newCount)
  })
})