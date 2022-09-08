namespace InhouseLoadingAnimations {
    class InhouseAnimation {
        private running: boolean = false;
        protected pls_stop: boolean = false;
        protected stopped: boolean = true;

        public constructor(protected z_index: number) {

        }

        public start(): void {
            if (this.running) {
                this.stop();
            }
            this.stopped = false;
            this.pls_stop = false;
            this.running = true;
            control.runInParallel(() => {
                this.start_animation();
            });
        }

        public stop(): void {
            if (!this.running || this.pls_stop) {
                return;
            }
            this.pls_stop = true;
            while (!this.stopped) {
                pause(0);
            }
            this.pls_stop = false;
        }

        protected start_animation(): void {
            throw "Not implemented";

            // setup here

            while (true) {
                // animation stuff here

                if (this.pls_stop) {
                    break;
                }
            }

            // cleanup here

            this.stopped = true;
        }
    }

    export class OnStart extends InhouseAnimation {
        protected start_animation(): void {
            // setup here

            while (true) {
                // animation stuff here

                if (this.pls_stop) {
                    break;
                }
            }

            // cleanup here

            this.stopped = true;
        }
    }
}
