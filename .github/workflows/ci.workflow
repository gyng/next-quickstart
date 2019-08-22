workflow "Build, Test" {
  on "pull_request" {
    branches = ["master"]
  }
  resolves = ["Test"]
}

action "Build" {
  uses = "nuxt/actions-yarn@master"
  args = "install"
}

action "Test" {
  needs = "Build"
  uses = "nuxt/actions-yarn@master"
  args = "test"
}
