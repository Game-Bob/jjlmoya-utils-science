export interface SimulationResult {
    probability: number;
    verdict: string;
    detail: string;
}

export class SimulationEngine {
    static calculate(
        fp: number, 
        fl: number, 
        fi: number, 
        n: number   
    ): SimulationResult {
        
        const numerator = fp * fl * fi * n;
        const pSim = numerator / (1 + numerator);
        const percentage = pSim * 100;

        let verdict = "Probabilidad de Simulación";
        let detail = "Analiza los parámetros para ver si vives en una simulación.";

        if (percentage > 90) {
            verdict = "Casi Ciertamente Simulado";
            detail = "Estás casi ciertamente en una simulación. Los errores en el sistema son solo cuestión de tiempo.";
        } else if (percentage > 50) {
            verdict = "Probablemente Simulado";
            detail = "Es más probable que seas un código que un ser biológico original.";
        } else if (percentage > 10) {
            verdict = "Incierto";
            detail = "La realidad física parece resistir, pero la duda sistemática es razonable.";
        } else {
            verdict = "Probablemente Original";
            detail = "Probablemente seas un original biológico. Disfruta de la realidad 'real' mientras dure.";
        }

        return {
            probability: percentage,
            verdict,
            detail,
        };
    }
}
