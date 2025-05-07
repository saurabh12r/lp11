```
Welcome to the Google Cloud CLI! Run "gcloud -h" to get the list of available commands.
---

C:\Program Files (x86)\Google\Cloud SDK>gcloud init
Welcome! This command will take you through the configuration of gcloud.

Settings from your current configuration [firebase] are:
accessibility:
  screen_reader: 'False'
core:
  account: amansj15021@gmail.com
  disable_usage_reporting: 'True'
  project: project-c2009

Pick configuration to use:
 [1] Re-initialize this configuration [firebase] with new settings
 [2] Create a new configuration
 [3] Switch to and re-initialize existing configuration: [default]
 [4] Switch to and re-initialize existing configuration: [helloeasycode]
Please enter your numeric choice:  1

Your current configuration has been set to: [firebase]

You can skip diagnostics next time by using the following flag:
  gcloud init --skip-diagnostics

Network diagnostic detects and fixes local network connection issues.
Checking network connection...done.
Reachability Check passed.
Network diagnostic passed (1/1 checks passed).

Choose the account you want to use for this configuration.
To use a federated user account, exit this command and sign in to the gcloud CLI with your login configuration file,
then run this command again.

Select an account:
 [1] amansj15021@gmail.com
 [2] Sign in with a new Google Account
 [3] Skip this step
Please enter your numeric choice:  1

You are signed in as: [amansj15021@gmail.com].

Pick cloud project to use:
 [1] exalted-amphora-450906-p9
 [2] project-c2009
 [3] Enter a project ID
 [4] Create a new project
Please enter numeric choice or text value (must exactly match list item):  1

Your current project has been set to: [exalted-amphora-450906-p9].

Do you want to configure a default Compute Region and Zone? (Y/n)?  y

Which Google Compute Engine zone would you like to use as project default?
If you do not specify a zone via a command line flag while working with Compute Engine resources, the default is assumed.
 [1] us-east1-b
 [2] us-east1-c
 [3] us-east1-d
 [4] us-east4-c
 [5] us-east4-b
 [6] us-east4-a
 [7] us-central1-c
 [8] us-central1-a
 [9] us-central1-f
 [10] us-central1-b
 [11] us-west1-b
 [12] us-west1-c
 [13] us-west1-a
 [14] europe-west4-a
 [15] europe-west4-b
 [16] europe-west4-c
 [17] europe-west1-b
 [18] europe-west1-d
 [19] europe-west1-c
 [20] europe-west3-c
 [21] europe-west3-a
 [22] europe-west3-b
 [23] europe-west2-c
 [24] europe-west2-b
 [25] europe-west2-a
 [26] asia-east1-b
 [27] asia-east1-a
 [28] asia-east1-c
 [29] asia-southeast1-b
 [30] asia-southeast1-a
 [31] asia-southeast1-c
 [32] asia-northeast1-b
 [33] asia-northeast1-c
 [34] asia-northeast1-a
 [35] asia-south1-c
 [36] asia-south1-b
 [37] asia-south1-a
 [38] australia-southeast1-b
 [39] australia-southeast1-c
 [40] australia-southeast1-a
 [41] southamerica-east1-b
 [42] southamerica-east1-c
 [43] southamerica-east1-a
 [44] africa-south1-a
 [45] africa-south1-b
 [46] africa-south1-c
 [47] asia-east2-a
 [48] asia-east2-b
 [49] asia-east2-c
 [50] asia-northeast2-a
Did not print [78] options.
Too many options [128]. Enter "list" at prompt to print choices fully.
Please enter numeric choice or text value (must exactly match list item):  6

Your project default Compute Engine zone has been set to [us-east4-a].
You can change it by running [gcloud config set compute/zone NAME].

Your project default Compute Engine region has been set to [us-east4].
You can change it by running [gcloud config set compute/region NAME].

The Google Cloud CLI is configured and ready to use!

* Commands that require authentication will use amansj15021@gmail.com by default
* Commands will reference project `exalted-amphora-450906-p9` by default
* Compute Engine commands will use region `us-east4` by default
* Compute Engine commands will use zone `us-east4-a` by default

Run `gcloud help config` to learn how to change individual settings

This gcloud configuration is called [firebase]. You can create additional configurations if you work with multiple accounts and/or projects.
Run `gcloud topic configurations` to learn more.

Some things to try next:

* Run `gcloud --help` to see the Cloud Platform services you can interact with. And run `gcloud help COMMAND` to get help on any gcloud command.
* Run `gcloud topic --help` to learn about advanced features of the CLI like arg files and output formatting
* Run `gcloud cheat-sheet` to see a roster of go-to `gcloud` commands.

C:\Program Files (x86)\Google\Cloud SDK>gcloud app browse
Opening [https://exalted-amphora-450906-p9.el.r.appspot.com] in a new tab in your default browser.

C:\Program Files (x86)\Google\Cloud SDK>
```