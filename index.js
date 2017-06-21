function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  let rls = document.querySelectorAll('.ranked-list')
  for (let i = 0; i < rls.length; i++) {
    let children = rls[i].children
    for (let j = 0; j < children.length; j++) {
      children[j].innerHTML = parseInt(children[j].innerHTML) + n
    }
  }
}

function deepestChild() {
  let kids = document.getElementById('grand-node')
  let nextKid = kids.children[0]

  while(nextKid) {
    var deepChild = nextKid
    nextKid = deepChild.children[0]
  }
  return deepChild
}
