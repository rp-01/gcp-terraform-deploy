terraform {
  backend "remote" {
    hostname = "app.terraform.io"
    organization = //"Raj01"

    workspaces {
      name = //"gcp-vm-01"
    }
  }
}
provider "google" {
  credentials = var.gcp-credentials
  project = //"sinuous-axiom-277316"
  region  = "us-central1"
  zone    = "us-central1-c"
}

resource "google_compute_instance" "vm_instance" {
  name         = "terraform-instance"
  machine_type = "n1-standard-1"

  boot_disk {
    initialize_params {
      image = "debian-cloud/debian-9"
    }
  }

  network_interface {
        network       = "default"
    access_config {
    }
  }
}

